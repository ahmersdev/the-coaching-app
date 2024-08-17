import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RHFTextField, RHFUploadFile } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import { useFieldArray } from "react-hook-form";
import { useEffect } from "react";

export default function WorkoutOne({ control, watch }: any) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "dayOneWorkoutOneReps",
  });

  const watchSets = watch("sets");

  useEffect(() => {
    // Calculate the difference between the current length of fields and watchSets
    const diff = watchSets - fields.length;

    const makeChanges = () => {
      if (diff > 0) {
        // If watchSets is greater than fields length, append the difference
        for (let i = 0; i < diff; i++) {
          append({ rep: "" });
        }
      } else if (diff < 0) {
        // If watchSets is less than fields length, remove the excess items
        for (let i = 0; i < -diff; i++) {
          // Ensure that the last item is removed each time to avoid index issues
          remove(fields.length - 1);
        }
      }
    };

    const timeoutId = setTimeout(makeChanges, 500);

    return () => clearTimeout(timeoutId);
  }, [watchSets, fields, append, remove]);

  return (
    <Box bgcolor={"secondary.900"} borderRadius={3} mt={2}>
      <Accordion
        elevation={0}
        defaultExpanded
        sx={{
          bgcolor: "transparent",
          p: 1,
          "&.Mui-expanded": {
            margin: 0,
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "grey.100" }} />}
        >
          <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
            Exercise 01
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12} md={5}>
              <RHFTextField
                name={"exercise_name"}
                label={"Exercise Name"}
                placeholder={"Enter Exercise Name"}
                bgcolor={"secondary.800"}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <RHFTextField
                name={"sets"}
                label={"Sets"}
                placeholder={"Enter Number of Sets"}
                type={"number"}
                bgcolor={"secondary.800"}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1}>
                {fields?.map((rep: any, repIndex: number) => (
                  <Grid item xs={12} md={2.5} key={rep.id}>
                    <RHFTextField
                      name={`dayOneWorkoutOneReps[${repIndex}].rep`}
                      label={`Reps - Set ${repIndex + 1}`}
                      placeholder={"00"}
                      type={"number"}
                      bgcolor={"secondary.800"}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              <RHFUploadFile
                name={"workout_video"}
                label={"Workout Video"}
                border={0}
                bgcolor={"secondary.main"}
              />
            </Grid>
            <Grid item xs={0} md={7} />
            <Grid item xs={12} md={5}>
              <RHFTextField
                name={"note"}
                label={"Add Note"}
                placeholder={"Add Some Details"}
                multiline
                rows={3}
                bgcolor={"secondary.800"}
              />
            </Grid>
            <Grid item xs={12}>
              <LoadingButton
                variant={"contained"}
                sx={{
                  color: "grey.100",
                  width: 132,
                  borderRadius: 25,
                  border: "1px solid",
                  borderColor: "primary.main",
                }}
                disableElevation
                type={"submit"}
              >
                Add
              </LoadingButton>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
