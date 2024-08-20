import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { useFieldArray } from "react-hook-form";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RHFTextField, RHFUploadFile } from "@/components/react-hook-form";
import Reps from "./reps";

export default function WorkoutAll({ control, watch, dayIndex }: any) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `daysAll[${dayIndex}].daysAllWorkoutAll`,
  });

  const handleAddWorkout = () => {
    append({
      exercise_name: "",
      sets: "",
      workout_video: null,
      note: "",
    });
  };

  const handleRemoveWorkout = (workoutIndex: any) => {
    remove(workoutIndex);
  };

  return (
    <>
      {fields?.map((workout: any, workoutIndex: any) => (
        <Box bgcolor={"secondary.900"} key={workout.id} borderRadius={3} mt={2}>
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
                    Exercise 0{workoutIndex + 2}
                  </Typography>
                </Box>
                <Typography
                  variant={"body1"}
                  color={"grey.100"}
                  fontWeight={900}
                  onClick={() => handleRemoveWorkout?.(workoutIndex)}
                  mr={2}
                  sx={{ cursor: "pointer" }}
                >
                  X
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={1}>
                <Grid item xs={12} md={5}>
                  <RHFTextField
                    name={`daysAll[${dayIndex}].daysAllWorkoutAll[${workoutIndex}].exercise_name`}
                    label={"Exercise Name"}
                    placeholder={"Enter Exercise Name"}
                    bgcolor={"secondary.800"}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <RHFTextField
                    name={`daysAll[${dayIndex}].daysAllWorkoutAll[${workoutIndex}].sets`}
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
                    workoutIndex={workoutIndex}
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <RHFUploadFile
                    name={`daysAll[${dayIndex}].daysAllWorkoutAll[${workoutIndex}].workout_video`}
                    label={"Workout Video"}
                    border={0}
                    bgcolor={"secondary.main"}
                  />
                </Grid>
                <Grid item xs={0} md={7} />
                <Grid item xs={12} md={5}>
                  <RHFTextField
                    name={`daysAll[${dayIndex}].daysAllWorkoutAll[${workoutIndex}].note`}
                    label={"Add Note"}
                    placeholder={"Add Some Details"}
                    multiline
                    rows={3}
                    bgcolor={"secondary.800"}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}

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
        onClick={handleAddWorkout}
      >
        Add Another Exercise
      </Button>
    </>
  );
}
