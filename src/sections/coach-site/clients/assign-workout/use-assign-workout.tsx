import { successSnackbar } from "@/utils/api";
import { workoutValidationSchema, defaultValues } from "./assign-workout.data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";

interface RepSet {
  set: number;
  reps: number;
}

interface Exercise {
  exercise_name: string;
  sets: number;
  workout_video: File | null;
  note: string;
  reps_sets: RepSet[];
}

interface DayWorkout {
  day: number;
  exercises: Exercise[];
}

interface UpdatedData {
  details: DayWorkout[];
  client_id: string | any;
}

export default function useAssignWorkout() {
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");

  const methods: any = useForm({
    resolver: yupResolver(workoutValidationSchema),
    defaultValues,
  });

  const { handleSubmit, control, watch } = methods;

  const onSubmit = (data: any) => {
    const mapRepsSets = (repsData: any[]): RepSet[] => {
      return (
        repsData
          ?.filter((repSet) => repSet?.rep)
          ?.map((repSet, setIndex) => ({
            set: setIndex + 1,
            reps: Number(repSet?.rep || 0),
          })) || []
      );
    };

    const mapExercises = (workouts: any[]): Exercise[] => {
      return (
        workouts
          ?.filter(
            (workout) =>
              workout?.exercise_name ||
              workout?.sets ||
              workout?.workout_video ||
              workout?.note ||
              ((workout?.reps ||
                workout?.daysAllWorkoutAllReps ||
                workout?.dayOneWorkoutAllReps) &&
                (workout.reps?.length > 0 ||
                  workout.daysAllWorkoutAllReps?.length > 0 ||
                  workout.dayOneWorkoutAllReps?.length > 0))
          )
          ?.map((workout) => ({
            exercise_name: workout?.exercise_name || "",
            sets: Number(workout?.sets || 0),
            workout_video: workout?.workout_video || null,
            note: workout?.note || "",
            reps_sets: mapRepsSets(
              workout?.reps ||
                workout?.daysAllWorkoutAllReps ||
                workout?.dayOneWorkoutAllReps ||
                []
            ),
          })) || []
      );
    };

    const dayOneWorkoutOne: Exercise = {
      exercise_name: data?.exercise_name || "",
      sets: Number(data?.sets || 0),
      workout_video: data?.workout_video || null,
      note: data?.note || "",
      reps_sets: mapRepsSets(data?.dayOneWorkoutOneReps || []),
    };

    const dayOneAllWorkout: Exercise[] = [
      dayOneWorkoutOne,
      ...mapExercises(data?.dayOneWorkoutAll || []),
    ];

    const daysAll: DayWorkout[] =
      data?.daysAll?.map((workoutDay: any, dayIndex: number) => {
        const exercises = [
          {
            exercise_name: workoutDay?.exercise_name || "",
            sets: Number(workoutDay?.sets || 0),
            workout_video: workoutDay?.workout_video || null,
            note: workoutDay?.note || "",
            reps_sets: mapRepsSets(workoutDay?.daysAllWorkoutOneReps || []),
          },
          ...mapExercises(workoutDay?.daysAllWorkoutAll || []),
        ];

        return {
          day: dayIndex + 2,
          exercises,
        };
      }) || [];

    daysAll.unshift({
      day: 1,
      exercises: dayOneAllWorkout,
    });

    const updatedData: UpdatedData = {
      details: daysAll,
      client_id: clientId,
    };

    console.log(updatedData);

    successSnackbar("Workout Assigned Successfully!");
  };

  return { methods, handleSubmit, onSubmit, control, watch };
}
