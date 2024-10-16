import { useFieldArray, useForm } from "react-hook-form";
import { assignWorkoutDefaultValues } from "@/sections/coach-site/clients/assign-workout.data";
import { useEffect } from "react";

export default function useTraining(workoutPlans: any) {
  const methods = useForm({
    defaultValues: assignWorkoutDefaultValues,
  });

  const { control, reset } = methods;

  const { fields: daysField } = useFieldArray({
    control,
    name: "days",
  });

  useEffect(() => {
    const originalFormData = workoutPlans[0].workout_days.map((day: any) => ({
      workout_day_id: day.workout_day_id,
      day: day.day,
      exercises: day.exercises.map((exercise: any) => ({
        exercise_id: exercise.exercise_id,
        exercise_name: exercise.exercise_name,
        sets: exercise.sets,
        workout_video: exercise.workout_video,
        note: exercise.note,
        reps_sets: exercise.reps_sets.map((repSet: any) => ({
          rep: repSet.reps,
        })),
      })),
    }));

    reset({ days: originalFormData });
  }, [workoutPlans, reset]);

  return { methods, control, daysField };
}
