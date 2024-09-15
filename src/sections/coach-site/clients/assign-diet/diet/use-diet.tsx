import { useFieldArray } from "react-hook-form";
import { useDeleteWorkoutExerciseMutation } from "@/services/coach-site/clients";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { mealDefaultValues } from "../assign-diet.data";

export default function useDiet({
  control,
  dayIndex,
  clientId,
  workoutPlanId,
  workoutDayId,
}: any) {
  const {
    fields: dietField,
    append: dietAppend,
    remove: dietRemove,
  } = useFieldArray({
    control,
    name: `days[${dayIndex}].meals`,
  });

  const handleAddExercise = () => {
    dietAppend(mealDefaultValues.meals);
  };

  //   const [deleteWorkoutExerciseTrigger] = useDeleteWorkoutExerciseMutation();

  const handleRemoveExercise = async (mealIndex: any) => {
    const mealToRemove: any = dietField[mealIndex];

    // const workoutExerciseId = mealToRemove?.exercise_id;

    // if (workoutDayId && workoutPlanId && workoutExerciseId) {
    //   const params = {
    //     client_id: clientId,
    //     workout_plan_id: workoutPlanId,
    //     workout_day_id: workoutDayId,
    //     exercise_id: workoutExerciseId,
    //   };
    //   try {
    //     await deleteWorkoutExerciseTrigger(params).unwrap();
    //     successSnackbar("Exercise removed successfully!");
    //   } catch (error: any) {
    //     errorSnackbar(error?.data?.error);
    //     return;
    //   }
    // } else {
    dietRemove(mealIndex);
    // }
  };

  return { dietField, handleRemoveExercise, handleAddExercise };
}
