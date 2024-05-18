import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { WorkoutDayIcon } from "@/assets/icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WorkoutOne from "./workout-one";
import WorkoutAll from "./workout-all";

export default function DayOne({ control, watch }: any) {
  return (
    <Box bgcolor={"secondary.main"} borderRadius={3} mt={2}>
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
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <WorkoutDayIcon />
            <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
              Day 01
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Divider sx={{ mb: 2 }} />
          <WorkoutOne control={control} watch={watch} />

          <WorkoutAll control={control} watch={watch} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
