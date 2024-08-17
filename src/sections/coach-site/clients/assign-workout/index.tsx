"use client";

import { FormProvider } from "@/components/react-hook-form";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { COACH_SITE } from "@/constants/routes";
import { ArrowBackIcon } from "@/assets/icons";
import { LoadingButton } from "@mui/lab";
import DayOne from "./day-one";
import DayAll from "./day-all";
import useAssignWorkout from "./use-assign-workout";

export default function AssignWorkout() {
  const { methods, handleSubmit, onSubmit, control, watch } =
    useAssignWorkout();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={1}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Link href={COACH_SITE?.CLIENTS}>
            <ArrowBackIcon />
          </Link>
          <Typography variant={"h3"} fontWeight={600}>
            Assign Workout
          </Typography>
        </Box>

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
          Assign
        </LoadingButton>
      </Box>

      <DayOne control={control} watch={watch} />

      <DayAll control={control} watch={watch} />
    </FormProvider>
  );
}
