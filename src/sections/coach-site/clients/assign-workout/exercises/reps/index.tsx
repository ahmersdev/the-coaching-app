import { RHFTextField } from "@/components/react-hook-form";
import { Grid } from "@mui/material";
import useReps from "./use-reps";

export default function Reps({ control, watch, dayIndex, exerciseIndex }: any) {
  const { fieldsReps } = useReps({ control, watch, dayIndex, exerciseIndex });

  return (
    <Grid container spacing={1}>
      {fieldsReps?.map((rep: any, repIndex: number) => (
        <Grid item xs={12} md={2.5} key={rep.id}>
          <RHFTextField
            name={`days[${dayIndex}].exercises[${exerciseIndex}].reps_sets[${repIndex}].rep`}
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
