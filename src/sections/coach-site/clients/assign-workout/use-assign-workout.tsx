import { successSnackbar } from "@/utils/api";
import { workoutValidationSchema, defaultValues } from "./assign-workout.data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSearchParams } from "next/navigation";

export default function useAssignWorkout() {
  const searchParams = useSearchParams();
  const clientId = searchParams?.get("clientId");

  const methods: any = useForm({
    resolver: yupResolver(workoutValidationSchema),
    defaultValues,
  });

  const { handleSubmit, control, watch } = methods;

  const onSubmit = (data: any) => {
    const dayOneWorkoutOne = {
      exerciseName: data?.exerciseName || "",
      sets: data?.sets || "",
      video: data?.video || null,
      note: data?.note || "",
      reps: [
        ...(data?.dayOneWorkoutOneReps || [])
          ?.filter((workoutRep: any) => workoutRep?.rep)
          ?.map((workoutRep: any) => ({
            rep: workoutRep?.rep || "",
          })),
      ],
    };

    const dayOneAllWorkout = [
      dayOneWorkoutOne,
      ...(data?.dayOneWorkoutAll || [])
        ?.filter(
          (allWorkout: any) =>
            allWorkout?.exerciseName ||
            allWorkout?.sets ||
            allWorkout?.video ||
            allWorkout?.note ||
            (allWorkout?.dayOneWorkoutAllReps &&
              allWorkout?.dayOneWorkoutAllReps?.length > 0)
        )
        ?.map((allWorkout: any) => ({
          exerciseName: allWorkout?.exerciseName || "",
          sets: allWorkout?.sets || "",
          video: allWorkout?.video || null,
          note: allWorkout?.note || "",
          reps: [
            ...(allWorkout?.dayOneWorkoutAllReps || [])
              ?.filter((workoutRep: any) => workoutRep?.rep)
              ?.map((workoutRep: any) => ({
                rep: workoutRep?.rep || "",
              })),
          ],
        })),
    ];

    const daysAll = data?.daysAll
      ?.filter(
        (workoutAll: any) =>
          workoutAll?.exerciseName ||
          workoutAll?.sets ||
          workoutAll?.video ||
          workoutAll?.note ||
          (workoutAll?.daysAllWorkoutOneReps &&
            workoutAll?.daysAllWorkoutOneReps?.length > 0)
      )
      ?.map((workoutAll: any) => {
        const result: any = [];

        result[0] = {
          exerciseName: workoutAll?.exerciseName || "",
          sets: workoutAll?.sets || "",
          video: workoutAll?.video || null,
          note: workoutAll?.note || "",
          reps: [
            ...(workoutAll?.daysAllWorkoutOneReps || [])
              ?.filter((workoutRep: any) => workoutRep?.rep)
              ?.map((workoutRep: any) => ({
                rep: workoutRep?.rep || "",
              })),
          ],
        };

        workoutAll?.daysAllWorkoutAll
          ?.filter(
            (workout: any) =>
              workout?.exerciseName ||
              workout?.sets ||
              workout?.video ||
              workout?.note ||
              (workout?.daysAllWorkoutAllReps &&
                workout?.daysAllWorkoutAllReps?.length > 0)
          )
          .forEach((workout: any, index: any) => {
            result[index + 1] = {
              exerciseName: workout?.exerciseName || "",
              sets: workout?.sets || "",
              video: workout?.video || null,
              note: workout?.note || "",
              reps: [
                ...(workout?.daysAllWorkoutAllReps || [])
                  ?.filter((workoutRep: any) => workoutRep?.rep)
                  ?.map((workoutRep: any) => ({
                    rep: workoutRep?.rep || "",
                  })),
              ],
            };
          });

        return result;
      });

    daysAll?.unshift(dayOneAllWorkout);

    const updatedData = {
      details: daysAll,
      client_id: clientId,
    };

    console.log(updatedData);

    successSnackbar("Workout Assigned Successfully!");
  };

  return { methods, handleSubmit, onSubmit, control, watch };
}
