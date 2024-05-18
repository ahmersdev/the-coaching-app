"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@/components/react-hook-form";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { COACH_SITE } from "@/constants/routes";
import { ArrowBackIcon } from "@/assets/icons";
import { LoadingButton } from "@mui/lab";
import * as Yup from "yup";
import DayOne from "./day-one";
import DayAll from "./day-all";
import { successSnackbar } from "@/utils/api";

const workoutValidationSchema: any = Yup.object().shape({
  exerciseName: Yup.string().trim().required("Required"),
  dayOneWorkoutAll: Yup.array().of(
    Yup.object().shape({
      exerciseName: Yup.string().required("Required"),
    })
  ),
  daysAll: Yup.array().of(
    Yup.object().shape({
      exerciseName: Yup.string().required("Required"),
      daysAllWorkoutAll: Yup.array().of(
        Yup.object().shape({
          exerciseName: Yup.string().required("Required"),
        })
      ),
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
    const dayOneWorkoutOne = {
      exerciseName: data?.exerciseName || "",
      sets: data?.sets || "",
      video: data?.video || null,
      note: data?.note || "",
      reps: [
        ...(data?.dayOneWorkoutOneReps || [])
          ?.filter((workoutRep: any) => workoutRep?.rep)
          ?.map((workoutRep: any) => ({
            rep: workoutRep?.rep || "",
          })),
      ],
    };

    const dayOneAllWorkout = [
      dayOneWorkoutOne,
      ...(data?.dayOneWorkoutAll || [])
        ?.filter(
          (allWorkout: any) =>
            allWorkout?.exerciseName ||
            allWorkout?.sets ||
            allWorkout?.video ||
            allWorkout?.note ||
            (allWorkout?.dayOneWorkoutAllReps &&
              allWorkout?.dayOneWorkoutAllReps?.length > 0)
        )
        ?.map((allWorkout: any) => ({
          exerciseName: allWorkout?.exerciseName || "",
          sets: allWorkout?.sets || "",
          video: allWorkout?.video || null,
          note: allWorkout?.note || "",
          reps: [
            ...(allWorkout?.dayOneWorkoutAllReps || [])
              ?.filter((workoutRep: any) => workoutRep?.rep)
              ?.map((workoutRep: any) => ({
                rep: workoutRep?.rep || "",
              })),
          ],
        })),
    ];

    const daysAll = data?.daysAll
      ?.filter(
        (workoutAll: any) =>
          workoutAll?.exerciseName ||
          workoutAll?.sets ||
          workoutAll?.video ||
          workoutAll?.note ||
          (workoutAll?.daysAllWorkoutOneReps &&
            workoutAll?.daysAllWorkoutOneReps?.length > 0)
      )
      ?.map((workoutAll: any) => {
        const result: any = [];

        result[0] = {
          exerciseName: workoutAll?.exerciseName || "",
          sets: workoutAll?.sets || "",
          video: workoutAll?.video || null,
          note: workoutAll?.note || "",
          reps: [
            ...(workoutAll?.daysAllWorkoutOneReps || [])
              ?.filter((workoutRep: any) => workoutRep?.rep)
              ?.map((workoutRep: any) => ({
                rep: workoutRep?.rep || "",
              })),
          ],
        };

        workoutAll?.daysAllWorkoutAll
          ?.filter(
            (workout: any) =>
              workout?.exerciseName ||
              workout?.sets ||
              workout?.video ||
              workout?.note ||
              (workout?.daysAllWorkoutAllReps &&
                workout?.daysAllWorkoutAllReps?.length > 0)
          )
          .forEach((workout: any, index: any) => {
            result[index + 1] = {
              exerciseName: workout?.exerciseName || "",
              sets: workout?.sets || "",
              video: workout?.video || null,
              note: workout?.note || "",
              reps: [
                ...(workout?.daysAllWorkoutAllReps || [])
                  ?.filter((workoutRep: any) => workoutRep?.rep)
                  ?.map((workoutRep: any) => ({
                    rep: workoutRep?.rep || "",
                  })),
              ],
            };
          });

        return result;
      });

    daysAll?.unshift(dayOneAllWorkout);

    successSnackbar("Workout Assigned Successfully!");
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
