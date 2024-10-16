import { WorkoutDayIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { AddCircle } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import Link from "next/link";
import useTraining from "./use-training";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormProvider } from "@/components/react-hook-form";
import Fields from "./fields";

export default function Training({ workoutPlans, clientId }: any) {
  const { methods, control, daysField } = useTraining(workoutPlans);

  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={1}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <WorkoutDayIcon />
          <Typography variant={"h6"} fontWeight={700}>
            Training Programs
          </Typography>
        </Box>
        <Link
          href={{
            pathname: COACH_SITE.CLIENTS_ASSIGN_WORKOUT,
            query: { clientId },
          }}
        >
          <Button
            variant={"contained"}
            startIcon={<AddCircle />}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              border: "1px dashed",
              borderColor: "grey.100",
              background: "transparent",
              ":hover": {
                backgroundColor: "grey.100",
                color: "grey.900",
              },
            }}
            disableElevation
          >
            Assign
          </Button>
        </Link>
      </Box>

      <Divider sx={{ my: 2 }} />

      {!!!workoutPlans?.length ? (
        <Typography
          variant={"body1"}
          textAlign={"center"}
          color={"grey.500"}
          py={2}
        >
          No Training Programs Assign Yet
        </Typography>
      ) : (
        <FormProvider methods={methods}>
          {daysField?.map((day: any, dayIndex) => (
            <Box
              bgcolor={"secondary.main"}
              borderRadius={3}
              mt={2}
              key={day.id}
            >
              <Accordion
                elevation={0}
                sx={{
                  bgcolor: "secondary.900",
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
                    <Typography
                      variant={"h6"}
                      color={"grey.100"}
                      fontWeight={700}
                    >
                      Day 0{dayIndex + 1}
                    </Typography>
                  </Box>
                </AccordionSummary>

                <AccordionDetails>
                  <Divider sx={{ mb: 2 }} />

                  <Fields control={control} dayIndex={dayIndex} />
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </FormProvider>
      )}
    </Box>
  );
}
