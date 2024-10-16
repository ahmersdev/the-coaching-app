import { useFieldArray } from "react-hook-form";
import { useDeleteWorkoutExerciseMutation } from "@/services/coach-site/clients";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { exerciseDefaultValues } from "@/sections/coach-site/assign-workout.data";

export default function useExercises({
  control,
  dayIndex,
  clientId,
  workoutPlanId,
  workoutDayId,
}: any) {
  const {
    fields: exercisesField,
    append: exercisesAppend,
    remove: exercisesRemove,
  } = useFieldArray({
    control,
    name: `days[${dayIndex}].exercises`,
  });

  const handleAddExercise = () => {
    exercisesAppend(exerciseDefaultValues.exercises);
  };

  const [deleteWorkoutExerciseTrigger] = useDeleteWorkoutExerciseMutation();

  const handleRemoveExercise = async (exerciseIndex: any) => {
    const exerciseToRemove: any = exercisesField[exerciseIndex];

    const workoutExerciseId = exerciseToRemove?.exercise_id;

    if (workoutDayId && workoutPlanId && workoutExerciseId) {
      const params = {
        client_id: clientId,
        workout_plan_id: workoutPlanId,
        workout_day_id: workoutDayId,
        exercise_id: workoutExerciseId,
      };
      try {
        await deleteWorkoutExerciseTrigger(params).unwrap();
        successSnackbar("Exercise removed successfully!");
      } catch (error: any) {
        errorSnackbar(error?.data?.error);
        return;
      }
    } else {
      exercisesRemove(exerciseIndex);
    }
  };

  return { exercisesField, handleRemoveExercise, handleAddExercise };
}
