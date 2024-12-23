"use client";

import { FormProvider } from "@/components/react-hook-form";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { COACH_SITE } from "@/constants/routes";
import { ArrowBackIcon } from "@/assets/icons";
import { LoadingButton } from "@mui/lab";
import { WorkoutDayIcon } from "@/assets/icons";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Exercises from "./exercises";
import useAssignWorkout from "./use-assign-workout";
import ApiErrorState from "@/components/api-error-state";

export default function AssignWorkout() {
  const {
    methods,
    control,
    watch,
    handleSubmit,
    onSubmit,
    daysField,
    handleRemoveDay,
    handleAddDay,
    postWorkoutStatus,
    isLoading,
    isFetching,
    isError,
    clientId,
    workoutPlanId,
  } = useAssignWorkout();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Link href={COACH_SITE?.CLIENTS}>
          <ArrowBackIcon />
        </Link>
        <Typography variant={"h3"} fontWeight={600}>
          Assign Workout
        </Typography>
      </Box>

      {isLoading || isFetching ? (
        <Box bgcolor={"secondary.main"} borderRadius={3} mt={2} p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Skeleton
                variant="rectangular"
                height={68}
                sx={{ bgcolor: "grey.700", borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Skeleton
                variant="rectangular"
                height={58}
                sx={{ bgcolor: "grey.700", borderRadius: 2 }}
              />
            </Grid>
            {[1, 2, 3, 4, 5]?.map((item: any) => (
              <Grid item xs={12} sm={6} key={item}>
                <Skeleton
                  variant="rectangular"
                  height={48}
                  sx={{ bgcolor: "grey.700", borderRadius: 2 }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : isError ? (
        <Box bgcolor={"secondary.main"} borderRadius={3} mt={2}>
          <ApiErrorState />
        </Box>
      ) : (
        <>
          {daysField?.map((day: any, dayIndex) => (
            <Box
              bgcolor={"secondary.main"}
              borderRadius={3}
              mt={2}
              key={day.id}
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
                      <WorkoutDayIcon />
                      <Typography
                        variant={"h6"}
                        color={"grey.100"}
                        fontWeight={700}
                      >
                        Day {dayIndex + 1}
                      </Typography>
                    </Box>
                    {dayIndex !== 0 && (
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
                    )}
                  </Box>
                </AccordionSummary>

                <AccordionDetails>
                  <Divider sx={{ mb: 2 }} />

                  <Exercises
                    control={control}
                    watch={watch}
                    dayIndex={dayIndex}
                    clientId={clientId}
                    workoutPlanId={workoutPlanId}
                    workoutDayId={day?.workout_day_id}
                  />
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
            onClick={handleAddDay}
          >
            Add Workout For Another Day
          </Button>

          <LoadingButton
            variant={"contained"}
            fullWidth
            sx={{
              color: "grey.100",
              borderRadius: 25,
              height: 54,
              mt: 2,
              "&.Mui-disabled": {
                bgcolor: "primary.main",
              },
            }}
            disableElevation
            type={"submit"}
            loading={postWorkoutStatus?.isLoading}
          >
            Assign Workout
          </LoadingButton>
        </>
      )}
    </FormProvider>
  );
}
