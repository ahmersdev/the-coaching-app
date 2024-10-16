import { useFieldArray } from "react-hook-form";
import { RHFTextField } from "@/components/react-hook-form";
import { Grid } from "@mui/material";

export default function Reps({ control, dayIndex, exerciseIndex }: any) {
  const { fields: fieldsReps } = useFieldArray({
    control,
    name: `days[${dayIndex}].exercises[${exerciseIndex}].reps_sets`,
  });

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
            disabled
          />
        </Grid>
      ))}
    </Grid>
  );
}
