import { repsDefaultValues } from "@/sections/coach-site/clients/assign-workout.data";
import { useEffect } from "react";
import { useFieldArray } from "react-hook-form";

export default function useReps({
  control,
  watch,
  dayIndex,
  exerciseIndex,
}: any) {
  const {
    fields: fieldsReps,
    append: appendReps,
    remove: removeReps,
  } = useFieldArray({
    control,
    name: `days[${dayIndex}].exercises[${exerciseIndex}].reps_sets`,
  });

  const watchSets = watch(`days[${dayIndex}].exercises[${exerciseIndex}].sets`);

  useEffect(() => {
    const diff = watchSets - fieldsReps.length;

    const makeChanges = () => {
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          appendReps(repsDefaultValues);
        }
      } else if (diff < 0) {
        for (let i = 0; i < -diff; i++) {
          removeReps(fieldsReps.length - 1);
        }
      }
    };

    const timeoutId = setTimeout(makeChanges, 500);

    return () => clearTimeout(timeoutId);
  }, [watchSets, fieldsReps, appendReps, removeReps]);

  return { fieldsReps };
}
