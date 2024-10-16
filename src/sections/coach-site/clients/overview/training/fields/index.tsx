import { useFieldArray } from "react-hook-form";
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
import Reps from "./reps";

export default function Fields({ control, dayIndex }: any) {
  const { fields: exercisesField } = useFieldArray({
    control,
    name: `days[${dayIndex}].exercises`,
  });

  return (
    <>
      {exercisesField.map((exercise, exerciseIndex) => (
        <Box
          bgcolor={"secondary.800"}
          key={exercise.id}
          borderRadius={3}
          mt={2}
        >
          <Accordion
            elevation={0}
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
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
                  Exercise 0{exerciseIndex + 1}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={1}>
                <Grid item xs={12} md={5}>
                  <RHFTextField
                    name={`days[${dayIndex}].exercises[${exerciseIndex}].exercise_name`}
                    label={"Exercise Name"}
                    placeholder={"Enter Exercise Name"}
                    bgcolor={"secondary.800"}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <RHFTextField
                    name={`days[${dayIndex}].exercises[${exerciseIndex}].sets`}
                    label={"Sets"}
                    placeholder={"Enter Number of Sets"}
                    type={"number"}
                    bgcolor={"secondary.800"}
                    disabled
                  />
                </Grid>
                <Grid item xs={12}>
                  <Reps
                    control={control}
                    dayIndex={dayIndex}
                    exerciseIndex={exerciseIndex}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <RHFUploadFile
                    name={`days[${dayIndex}].exercises[${exerciseIndex}].workout_video`}
                    label={"Workout Video"}
                    border={0}
                    bgcolor={"secondary.main"}
                    disabled
                  />
                </Grid>
                <Grid item xs={0} md={7} />
                <Grid item xs={12} md={5}>
                  <RHFTextField
                    name={`days[${dayIndex}].exercises[${exerciseIndex}].note`}
                    label={"Add Note"}
                    placeholder={"Add Some Details"}
                    multiline
                    rows={3}
                    bgcolor={"secondary.800"}
                    disabled
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </>
  );
}
