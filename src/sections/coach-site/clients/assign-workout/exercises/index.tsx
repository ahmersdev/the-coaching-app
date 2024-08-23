import { RHFTextField, RHFUploadFile } from "@/components/react-hook-form";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Reps from "./reps";
import useExercises from "./use-exercises";

export default function Exercises({
  control,
  watch,
  dayIndex,
  clientId,
  workoutPlanId,
  workoutDayId,
}: any) {
  const { exercisesField, handleRemoveExercise, handleAddExercise } =
    useExercises({ control, dayIndex, clientId, workoutPlanId, workoutDayId });

  return (
    <>
      {exercisesField.map((exercise, exerciseIndex) => (
        <Box
          bgcolor={"secondary.900"}
          key={exercise.id}
          borderRadius={3}
          mt={2}
        >
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
              <Box
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={1}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Typography
                    variant={"h6"}
                    color={"grey.100"}
                    fontWeight={700}
                  >
                    Exercise 0{exerciseIndex + 1}
                  </Typography>
                </Box>
                {exerciseIndex !== 0 && (
                  <Typography
                    variant={"body1"}
                    color={"grey.100"}
                    fontWeight={900}
                    onClick={() => handleRemoveExercise?.(exerciseIndex)}
                    mr={2}
                    sx={{ cursor: "pointer" }}
                  >
                    X
                  </Typography>
                )}
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
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <RHFTextField
                    name={`days[${dayIndex}].exercises[${exerciseIndex}].sets`}
                    label={"Sets"}
                    placeholder={"Enter Number of Sets"}
                    type={"number"}
                    bgcolor={"secondary.800"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Reps
                    control={control}
                    watch={watch}
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
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant={"contained"}
                    fullWidth
                    sx={{
                      color: "grey.100",
                      borderRadius: 25,
                      height: 54,
                      border: "1px dashed",
                      borderColor: "grey.100",
                      background: "transparent",
                      mt: 2,
                      ":hover": {
                        backgroundColor: "grey.100",
                        color: "grey.900",
                      },
                    }}
                    disableElevation
                    onClick={handleAddExercise}
                  >
                    Add Another Exercise
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </>
  );
}
