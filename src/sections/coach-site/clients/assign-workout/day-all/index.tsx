import { DietDayIcon } from "@/assets/icons";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import { useFieldArray } from "react-hook-form";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkoutOne from "./workout-one";
import WorkoutAll from "./workout-all";

export default function DayAll({ control, watch }: any) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "daysAll",
  });

  const handleAddDay = () => {
    append({
      exercise_name: "",
      sets: "",
      workout_video: null,
      note: "",
    });
  };

  const handleRemoveDay = (dayIndex: any) => {
    remove(dayIndex);
  };

  return (
    <>
      {fields?.map((day: any, dayIndex: number) => (
        <Box bgcolor={"secondary.main"} borderRadius={3} mt={2} key={day.id}>
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
                  <DietDayIcon />
                  <Typography
                    variant={"h6"}
                    color={"grey.100"}
                    fontWeight={700}
                  >
                    Day 0{dayIndex + 2}
                  </Typography>
                </Box>
                <Typography
                  variant={"body1"}
                  color={"grey.100"}
                  fontWeight={900}
                  onClick={() => handleRemoveDay?.(dayIndex)}
                  mr={2}
                  sx={{ cursor: "pointer" }}
                >
                  X
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Divider sx={{ mb: 2 }} />
              <WorkoutOne control={control} watch={watch} dayIndex={dayIndex} />

              <WorkoutAll control={control} watch={watch} dayIndex={dayIndex} />
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
          mt: 2,
        }}
        disableElevation
        onClick={handleAddDay}
      >
        Add exercises for another day
      </Button>
    </>
  );
}
