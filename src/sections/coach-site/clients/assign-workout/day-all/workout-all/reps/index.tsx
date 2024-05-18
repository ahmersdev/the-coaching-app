import { RHFTextField } from "@/components/react-hook-form";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useFieldArray } from "react-hook-form";

export default function Reps({ control, watch, dayIndex, workoutIndex }: any) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `daysAll[${dayIndex}].daysAllWorkoutAll[${workoutIndex}].daysAllWorkoutAllReps`,
  });

  const watchSets = watch(
    `daysAll[${dayIndex}].daysAllWorkoutAll[${workoutIndex}].sets`
  );

  useEffect(() => {
    const diff = watchSets - fields.length;

    const makeChanges = () => {
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          append({ rep: "" });
        }
      } else if (diff < 0) {
        for (let i = 0; i < -diff; i++) {
          remove(fields.length - 1);
        }
      }
    };

    const timeoutId = setTimeout(makeChanges, 500);

    return () => clearTimeout(timeoutId);
  }, [watchSets, fields, append, remove]);

  return (
    <Grid container spacing={1}>
      {fields?.map((rep: any, repIndex: number) => (
        <Grid item xs={12} md={2.5} key={rep.id}>
          <RHFTextField
            name={`daysAll[${dayIndex}].daysAllWorkoutAll[${workoutIndex}].daysAllWorkoutAllReps[${repIndex}].rep`}
            label={`Reps - Set ${repIndex + 1}`}
            placeholder={"00"}
            type={"number"}
            bgcolor={"secondary.800"}
          />
        </Grid>
      ))}
    </Grid>
  );
}
