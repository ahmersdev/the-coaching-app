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

const dietValidationSchema: any = Yup.object().shape({
  mealName: Yup.string().trim().required("Required"),
  dayOneMealAll: Yup.array().of(
    Yup.object().shape({
      mealName: Yup.string().required("Required"),
    })
  ),
  daysAll: Yup.array().of(
    Yup.object().shape({
      mealName: Yup.string().required("Required"),
      daysAllMealsAll: Yup.array().of(
        Yup.object().shape({
          mealName: Yup.string().required("Required"),
        })
      ),
    })
  ),
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
    const dayOneMealOne = {
      mealName: data?.mealName || "",
      note: data?.note || "",
      diets: [
        {
          includes: data?.includes || "",
          quantity: data?.quantity || "",
        },
        ...(data?.dayOneMealOneDiets || [])
          ?.filter((mealDiet: any) => mealDiet?.includes || mealDiet?.quantity)
          ?.map((mealDiet: any) => ({
            includes: mealDiet?.includes || "",
            quantity: mealDiet?.quantity || "",
          })),
      ],
    };

    const dayOneAllMeal = [
      dayOneMealOne,
      ...(data?.dayOneMealAll || [])
        ?.filter(
          (allMeals: any) =>
            allMeals?.mealName ||
            allMeals?.note ||
            allMeals?.includes ||
            allMeals?.quantity ||
            (allMeals?.dayOneMealAllDiets &&
              allMeals?.dayOneMealAllDiets?.length > 0)
        )
        ?.map((allMeals: any) => ({
          mealName: allMeals?.mealName || "",
          note: allMeals?.note || "",
          diets: [
            {
              includes: allMeals?.includes || "",
              quantity: allMeals?.quantity || "",
            },
            ...(allMeals?.dayOneMealAllDiets || [])
              ?.filter(
                (mealDiet: any) => mealDiet?.includes || mealDiet?.quantity
              )
              ?.map((mealDiet: any) => ({
                includes: mealDiet?.includes || "",
                quantity: mealDiet?.quantity || "",
              })),
          ],
        })),
    ];

    const daysAll = data?.daysAll
      ?.filter(
        (mealsAll: any) =>
          mealsAll?.mealName ||
          mealsAll?.note ||
          mealsAll?.includes ||
          mealsAll?.quantity ||
          (mealsAll?.daysAllMealOneDiets &&
            mealsAll?.daysAllMealOneDiets?.length > 0)
      )
      ?.map((mealsAll: any) => {
        const result: any = [];

        result[0] = {
          mealName: mealsAll?.mealName || "",
          note: mealsAll?.note || "",
          diets: [
            {
              includes: mealsAll?.includes || "",
              quantity: mealsAll?.quantity || "",
            },
            ...(mealsAll?.daysAllMealOneDiets || [])
              ?.filter(
                (mealDiet: any) => mealDiet?.includes || mealDiet?.quantity
              )
              ?.map((mealDiet: any) => ({
                includes: mealDiet?.includes || "",
                quantity: mealDiet?.quantity || "",
              })),
          ],
        };

        mealsAll?.daysAllMealsAll
          ?.filter(
            (meals: any) =>
              meals?.mealName ||
              meals?.note ||
              meals?.includes ||
              meals?.quantity ||
              (meals?.daysAllMealsAllDiets &&
                meals?.daysAllMealsAllDiets?.length > 0)
          )
          .forEach((meals: any, index: any) => {
            result[index + 1] = {
              mealName: meals?.mealName || "",
              note: meals?.note || "",
              diets: [
                {
                  includes: meals?.includes || "",
                  quantity: meals?.quantity || "",
                },
                ...(meals?.daysAllMealsAllDiets || [])
                  ?.filter(
                    (mealDiet: any) => mealDiet?.includes || mealDiet?.quantity
                  )
                  ?.map((mealDiet: any) => ({
                    includes: mealDiet?.includes || "",
                    quantity: mealDiet?.quantity || "",
                  })),
              ],
            };
          });

        return result;
      });

    daysAll?.unshift(dayOneAllMeal);

    successSnackbar("Diet Assigned Successfully!");
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
            Assign Diet
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
