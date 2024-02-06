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
import DayAll from "./day-all";

const dietValidationSchema: any = Yup.object().shape({
  // mealName: Yup.string().trim().required("Required"),
  // meals: Yup.array().of(
  //   Yup.object().shape({
  //     mealName: Yup.string().required("Required"),
  //   })
  // ),
});

const defaultValues = {
  mealName: "",
  includes: "",
  quantity: "",
  note: "",
};

export default function AssignDiet() {
  const methods: any = useForm({
    resolver: yupResolver(dietValidationSchema),
    defaultValues,
  });

  const { handleSubmit, control } = methods;

  const onSubmit = async (data: any) => {
    const mealOne = {
      mealName: data?.mealName || "",
      note: data?.note || "",
      diets: [
        {
          includes: data?.includes || "",
          quantity: data?.quantity || "",
        },
        ...(data?.diets || [])
          ?.filter((mealDiet: any) => mealDiet.includes || mealDiet.quantity)
          ?.map((mealDiet: any) => ({
            includes: mealDiet.includes || "",
            quantity: mealDiet.quantity || "",
          })),
      ],
    };

    const dayMealOne = {
      mealName: data?.days?.[0]?.mealName || "",
      note: data?.days?.[0]?.note || "",
      diets: [
        {
          includes: data?.days?.[0]?.includes || "",
          quantity: data?.days?.[0]?.quantity || "",
        },
        ...(data?.days?.[0]?.diets || [])
          ?.filter((mealDiet: any) => mealDiet.includes || mealDiet.quantity)
          ?.map((mealDiet: any) => ({
            includes: mealDiet.includes || "",
            quantity: mealDiet.quantity || "",
          })),
      ],
    };

    const dayOne = {
      meals: [
        mealOne,
        ...(data?.meals || [])
          ?.filter(
            (allMeals: any) =>
              allMeals.mealName ||
              allMeals.note ||
              allMeals.includes ||
              allMeals.quantity ||
              (allMeals.diets && allMeals.diets.length > 0)
          )
          ?.map((allMeals: any) => ({
            mealName: allMeals?.mealName || "",
            note: allMeals?.note || "",
            diets: [
              {
                includes: allMeals?.includes || "",
                quantity: allMeals?.quantity || "",
              },
              ...(allMeals?.diets || [])
                ?.filter(
                  (mealDiet: any) => mealDiet.includes || mealDiet.quantity
                )
                ?.map((mealDiet: any) => ({
                  includes: mealDiet.includes || "",
                  quantity: mealDiet.quantity || "",
                })),
            ],
          })),
      ],
    };

    // const daysArray = { days: [dayOne, dayMealOne] };

    console.log(data);
    enqueueSnackbar("Diet Added Successfully!", {
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
          <Link href={COACH_SITE?.CLIENTS_ALERTS}>
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

      <DayOne control={control} />

      <DayAll control={control} />
    </FormProvider>
  );
}
