import { useFieldArray } from "react-hook-form";
import { exerciseDefaultValues } from "../assign-workout.data";

export default function useExercises({ control, dayIndex }: any) {
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

  const handleRemoveExercise = (exerciseIndex: any) => {
    exercisesRemove(exerciseIndex);
  };

  return { exercisesField, handleRemoveExercise, handleAddExercise };
}
