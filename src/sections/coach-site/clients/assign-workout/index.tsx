"use client";

import { FormProvider } from "@/components/react-hook-form";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import Link from "next/link";
import { COACH_SITE } from "@/constants/routes";
import { ArrowBackIcon } from "@/assets/icons";
import { LoadingButton } from "@mui/lab";
import DayOne from "./day-one";
import DayAll from "./day-all";
import useAssignWorkout from "./use-assign-workout";
import ApiErrorState from "@/components/api-error-state";

export default function AssignWorkout() {
  const {
    methods,
    handleSubmit,
    onSubmit,
    control,
    watch,
    postWorkoutStatus,
    isLoading,
    isFetching,
    isError,
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
          <DayOne control={control} watch={watch} />

          <DayAll control={control} watch={watch} />

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
