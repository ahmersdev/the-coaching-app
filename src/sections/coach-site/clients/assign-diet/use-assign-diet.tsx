import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useEffect, useState } from "react";
import { COACH_SITE } from "@/constants/routes";
import {
  assignDietDefaultValues,
  assignDietValidationSchema,
} from "./assign-diet.data";
import {
  useDeleteDietDayMutation,
  useGetAssignDietQuery,
  usePostAssignDietMutation,
} from "@/services/coach-site/clients";

export default function useAssignDiet() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const clientId = searchParams.get("clientId");

  const [dietPlanId, setDietPlanId] = useState();

  const methods = useForm({
    resolver: yupResolver(assignDietValidationSchema),
    defaultValues: assignDietDefaultValues,
  });

  const { handleSubmit, control, reset } = methods;

  const {
    fields: daysField,
    append: daysAppend,
    remove: daysRemove,
  } = useFieldArray({
    control,
    name: "days",
  });

  const handleAddDay = () => {
    daysAppend(assignDietDefaultValues.days);
  };

  const [deleteDietDayTrigger] = useDeleteDietDayMutation();

  const handleRemoveDay = async (dayIndex: number) => {
    const dayToRemove: any = daysField[dayIndex];

    const dietPlanId = data?.details[0].diet_plan_id;
    const dietDayId = dayToRemove?.diet_day_id;

    if (dietDayId && dietPlanId) {
      const params = {
        client_id: clientId,
        diet_plan_id: dietPlanId,
        diet_day_id: dietDayId,
      };
      try {
        await deleteDietDayTrigger(params).unwrap();
        successSnackbar("Day removed successfully!");
      } catch (error: any) {
        errorSnackbar(error?.data?.error);
        return;
      }
    } else {
      daysRemove(dayIndex);
    }
  };

  const [postDietTrigger, postDietStatus] = usePostAssignDietMutation();

  const onSubmit = async (data: any) => {
    const transformedData = data.days.map((day: any, dayIndex: number) => ({
      day: dayIndex + 1,
      meals: day.meals.map((meal: any) => ({
        meal_title: meal.meal_title,
        serving_size: Number(meal.serving_size),
        serving_unit: meal.serving_unit,
        fat: meal.fat,
        carbohydrates: meal.carbohydrates,
        protein: meal.protein,
        fibre: meal.fibre,
        calories: meal.calories,
        sugar: meal.sugar,
        sodium: meal.sodium,
        note: meal.note,
      })),
    }));

    const updatedData = {
      details: JSON.stringify(transformedData),
      client_id: clientId,
    };

    try {
      await postDietTrigger(updatedData).unwrap();
      successSnackbar("Diet Plan Assigned Successfully!");
      router.push(COACH_SITE.CLIENTS);
      reset();
    } catch (error: any) {
      errorSnackbar(error?.data?.error);
    }
  };

  const { data, isLoading, isFetching, isError } = useGetAssignDietQuery(
    { client_id: clientId },
    { refetchOnMountOrArgChange: true, skip: !clientId }
  );

  useEffect(() => {
    if (data?.details) setDietPlanId(data?.details[0]?.diet_plan_id);
  }, [data]);

  useEffect(() => {
    if (data?.details) {
      const originalFormData = data.details?.[0].diet_days.map((day: any) => ({
        diet_day_id: day.diet_day_id,
        day: day.day,
        meals: day.meals.map((meal: any) => ({
          meal_id: meal.meal_id,
          meal_title: meal.meal_title,
          serving_size: Number(meal.serving_size),
          serving_unit: meal.serving_unit,
          fat: meal.fat,
          carbohydrates: meal.carbohydrates,
          protein: meal.protein,
          fibre: meal.fibre,
          calories: meal.calories,
          sugar: meal.sugar,
          sodium: meal.sodium,
          note: meal.note,
        })),
      }));

      reset({ days: originalFormData });
    }
  }, [data, reset]);

  return {
    methods,
    control,
    handleSubmit,
    onSubmit,
    daysField,
    handleRemoveDay,
    handleAddDay,
    postDietStatus,
    isLoading,
    isFetching,
    isError,
    clientId,
    dietPlanId,
  };
}
