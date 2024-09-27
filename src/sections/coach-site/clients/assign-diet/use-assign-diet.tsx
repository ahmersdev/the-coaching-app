import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useEffect, useState } from "react";
import { COACH_SITE } from "@/constants/routes";
import {
  assignDietDefaultValues,
  assignDietValidationSchema,
} from "./assign-diet.data";

export default function useAssignDiet() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const clientId = searchParams.get("clientId");

  // const [dietPlanId, setDietPlanId] = useState();

  const methods = useForm({
    resolver: yupResolver(assignDietValidationSchema),
    defaultValues: assignDietDefaultValues,
  });

  const { handleSubmit, control, watch, reset } = methods;

  const {
    fields: daysField,
    append: daysAppend,
    remove: daysRemove,
  } = useFieldArray({
    control,
    name: "days",
  });

  const handleAddDay = () => {
    daysAppend(assignDietDefaultValues.days);
  };

  // const [deleteWorkoutDayTrigger] = useDeleteWorkoutDayMutation();

  const handleRemoveDay = async (dayIndex: number) => {
    // const dayToRemove: any = daysField[dayIndex];

    // const workoutPlanId = data?.details[0].workout_plan_id;
    // const workoutDayId = dayToRemove?.workout_day_id;

    // if (workoutDayId && workoutPlanId) {
    //   const params = {
    //     client_id: clientId,
    //     workout_plan_id: workoutPlanId,
    //     workout_day_id: workoutDayId,
    //   };
    //   try {
    //     // await deleteWorkoutDayTrigger(params).unwrap();
    //     successSnackbar("Day removed successfully!");
    //   } catch (error: any) {
    //     errorSnackbar(error?.data?.error);
    //     return;
    //   }
    // } else {
    daysRemove(dayIndex);
    // }
  };

  // const [postWorkoutTrigger, postWorkoutStatus] =
  //   usePostAssignWorkoutMutation();

  const onSubmit = async (data: any) => {
    console.log(data);
    // const transformedData = data.days.map((day: any, dayIndex: number) => ({
    //   day: dayIndex + 1,
    //   exercises: day.exercises.map((exercise: any) => ({
    //     exercise_name: exercise.exercise_name,
    //     sets: Number(exercise.sets),
    //     workout_video: exercise.workout_video,
    //     note: exercise.note,
    //     reps_sets: exercise.reps_sets.map((repSet: any, repIndex: number) => ({
    //       set: repIndex + 1,
    //       reps: Number(repSet.rep),
    //     })),
    //   })),
    // }));

    // const updatedData = {
    //   details: JSON.stringify(transformedData),
    //   client_id: clientId,
    // };

    try {
      // await postWorkoutTrigger(updatedData).unwrap();
      successSnackbar("Workout Assigned Successfully!");
      console.log(data);
      // router.push(COACH_SITE.CLIENTS);
      reset();
    } catch (error: any) {
      errorSnackbar(error?.data?.error);
    }
  };

  // const { data, isLoading, isFetching, isError } = useGetAssignWorkoutQuery(
  //   { client_id: clientId },
  //   { refetchOnMountOrArgChange: true, skip: !clientId }
  // );

  // useEffect(() => {
  //   setDietPlanId(data?.details[0]?.workout_plan_id);
  // }, [data]);

  // useEffect(() => {
  //   if (data?.details) {
  //     const originalFormData = data.details[0].workout_days.map((day: any) => ({
  //       workout_day_id: day.workout_day_id,
  //       day: day.day,
  //       exercises: day.exercises.map((exercise: any) => ({
  //         exercise_id: exercise.exercise_id,
  //         exercise_name: exercise.exercise_name,
  //         sets: exercise.sets,
  //         workout_video: exercise.workout_video,
  //         note: exercise.note,
  //         reps_sets: exercise.reps_sets.map((repSet: any) => ({
  //           rep: repSet.reps,
  //         })),
  //       })),
  //     }));

  //     reset({ days: originalFormData });
  //   }
  // }, [data, reset]);

  return {
    methods,
    control,
    watch,
    handleSubmit,
    onSubmit,
    daysField,
    handleRemoveDay,
    handleAddDay,
    // postWorkoutStatus,
    // isLoading,
    // isFetching,
    // isError,
    clientId,
    // dietPlanId,
  };
}
