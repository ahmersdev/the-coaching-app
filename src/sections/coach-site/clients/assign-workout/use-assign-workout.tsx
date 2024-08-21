import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  assignWorkoutValidationSchema,
  assignWorkoutDefaultValues,
} from "./assign-workout.data";
import { useSearchParams } from "next/navigation";
import {
  useGetAssignWorkoutQuery,
  usePostAssignWorkoutMutation,
} from "@/services/coach-site/clients";
import { errorSnackbar, successSnackbar } from "@/utils/api";

export default function useAssignWorkout() {
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");

  const methods = useForm({
    resolver: yupResolver(assignWorkoutValidationSchema),
    defaultValues: assignWorkoutDefaultValues,
  });

  const { handleSubmit, control, watch } = methods;

  const {
    fields: daysField,
    append: daysAppend,
    remove: daysRemove,
  } = useFieldArray({
    control,
    name: "days",
  });

  const handleAddDay = () => {
    daysAppend(assignWorkoutDefaultValues.days);
  };

  const handleRemoveDay = (dayIndex: any) => {
    daysRemove(dayIndex);
  };

  const { data, isLoading, isFetching, isError } = useGetAssignWorkoutQuery(
    { client_id: clientId },
    { refetchOnMountOrArgChange: true, skip: !clientId }
  );

  const [postWorkoutTrigger, postWorkoutStatus] =
    usePostAssignWorkoutMutation();

  const onSubmit = async (data: any) => {
    const transformedData = data.days.map((day: any, dayIndex: number) => ({
      day: dayIndex + 1,
      exercises: day.exercises.map((exercise: any) => ({
        exercise_name: exercise.exercise_name,
        sets: Number(exercise.sets),
        workout_video: exercise.workout_video,
        note: exercise.note,
        reps_sets: exercise.reps_sets.map((repSet: any, repIndex: number) => ({
          set: repIndex + 1,
          reps: Number(repSet.rep),
        })),
      })),
    }));

    const updatedData = {
      details: JSON.stringify(transformedData),
      client_id: clientId,
    };

    try {
      await postWorkoutTrigger(updatedData).unwrap();
      successSnackbar("Workout Assigned Successfully!");
    } catch (error: any) {
      errorSnackbar(error?.data?.error);
    }
  };

  return {
    methods,
    control,
    watch,
    handleSubmit,
    onSubmit,
    daysField,
    handleRemoveDay,
    handleAddDay,
    postWorkoutStatus,
    isLoading,
    isFetching,
    isError,
  };
}
