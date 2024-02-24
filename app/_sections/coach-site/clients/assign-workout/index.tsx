"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import { FormProvider } from "@/app/_components/react-hook-form";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { COACH_SITE } from "@/app/_constants/routes";
import { ArrowBackIcon } from "@/app/_assets/icons";
import { LoadingButton } from "@mui/lab";
import * as Yup from "yup";
import DayOne from "./day-one";

const workoutValidationSchema: any = Yup.object().shape({
  exerciseName: Yup.string().trim().required("Required"),
  dayOneWorkoutAll: Yup.array().of(
    Yup.object().shape({
      exerciseName: Yup.string().required("Required"),
    })
  ),
});

const defaultValues = {
  exerciseName: "",
  sets: "",
  video: null,
  note: "",
};

export default function AssignWorkout() {
  const methods: any = useForm({
    resolver: yupResolver(workoutValidationSchema),
    defaultValues,
  });

  const { handleSubmit, control, watch } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
    enqueueSnackbar("Workout Assigned Successfully!", {
      variant: "success",
    });
  };

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
            Overview
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
    </FormProvider>
  );
}
