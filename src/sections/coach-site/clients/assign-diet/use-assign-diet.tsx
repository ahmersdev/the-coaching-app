import { useFieldArray, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useEffect, useState } from "react";
import { COACH_SITE } from "@/constants/routes";
import { assignDietValidationSchema } from "./assign-diet.data";
import {
  useDeleteDietDayMutation,
  useGetAssignDietQuery,
  usePostAssignDietMutation,
} from "@/services/coach-site/clients";
import { assignDietDefaultValues } from "@/sections/coach-site/clients/assign-diet.data";

export default function useAssignDiet() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const clientId = searchParams.get("clientId");

  const [dietPlanId, setDietPlanId] = useState();

  const methods = useForm({
    resolver: yupResolver(assignDietValidationSchema),
    defaultValues: assignDietDefaultValues,
  });

  const { handleSubmit, control, reset, setValue } = methods;

  const watchedDays = useWatch({ control, name: "days" });

  const { data, isLoading, isFetching, isError } = useGetAssignDietQuery(
    { client_id: clientId },
    { refetchOnMountOrArgChange: true, skip: !clientId }
  );

  useEffect(() => {
    if (data?.details) setDietPlanId(data?.details[0]?.diet_plan_id);
  }, [data]);

  // Reset to populate backend values
  useEffect(() => {
    if (data?.details?.length > 0) {
      const originalFormData = data.details[0]?.diet_days?.map((day: any) => ({
        diet_day_id: day.diet_day_id,
        day: day.day,
        meals: day.meals.map((meal: any) => ({
          meal_id: meal.meal_id,
          meal_title: meal.meal_title,
          items: meal.meal_items.map((mealItem: any) => ({
            item_id: mealItem.item_id,
            item_title: mealItem.item_title,
            serving_size: mealItem.serving_size,
            serving_unit: mealItem.serving_unit,
            fat: mealItem.fat,
            carbohydrates: mealItem.carbohydrates,
            protein: mealItem.protein,
            fibre: mealItem.fibre,
            calories: mealItem.calories,
            sugar: mealItem.sugar,
            sodium: mealItem.sodium,
            note: mealItem.note,
          })),
        })),
      }));

      // Delay reset to ensure proper rendering
      setTimeout(() => reset({ days: originalFormData }), 0);
    }
  }, [data?.details, reset]);

  // Make the calculations when the meal_title changes
  useEffect(() => {
    if (!watchedDays) return;

    watchedDays.forEach((day: any, dayIndex: number) => {
      day.meals.forEach((meal: any, mealIndex: number) => {
        meal.items.forEach((mealItem: any, mealItemIndex: number) => {
          if (mealItem.item_title && typeof mealItem.item_title === "object") {
            const servingSize = mealItem.serving_size;
            const firstServing =
              mealItem.item_title.servings?.serving?.[0] || {};

            const newValues = {
              fat: (
                ((firstServing.fat || 0) / firstServing.metric_serving_amount) *
                servingSize
              ).toFixed(2),
              carbohydrates: (
                ((firstServing.carbohydrate || 0) /
                  firstServing.metric_serving_amount) *
                servingSize
              ).toFixed(2),
              protein: (
                ((firstServing.protein || 0) /
                  firstServing.metric_serving_amount) *
                servingSize
              ).toFixed(2),
              fibre: (
                ((firstServing.fiber || 0) /
                  firstServing.metric_serving_amount) *
                servingSize
              ).toFixed(2),
              calories: (
                ((firstServing.calories || 0) /
                  firstServing.metric_serving_amount) *
                servingSize
              ).toFixed(2),
              sugar: (
                ((firstServing.sugar || 0) /
                  firstServing.metric_serving_amount) *
                servingSize
              ).toFixed(2),
              sodium: (
                ((firstServing.sodium || 0) /
                  firstServing.metric_serving_amount) *
                servingSize
              ).toFixed(2),
            };

            Object.entries(newValues).forEach(([key, value]) => {
              const currentValue = mealItem[key];
              if (currentValue !== value) {
                setValue(
                  `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].${key}`,
                  value,
                  {
                    shouldDirty: true,
                  }
                );
              }
            });
          }
        });
      });
    });
  }, [watchedDays, setValue]);

  // Make the calculations when the backend meal_title changes
  useEffect(() => {
    if (!watchedDays || !data?.details) return;

    watchedDays.forEach((day: any, dayIndex: number) => {
      day.meals.forEach((meal: any, mealIndex: number) => {
        meal.items.forEach((mealItem: any, mealItemIndex: number) => {
          if (mealItem.item_title && typeof mealItem.item_title === "string") {
            const backendDataDetails =
              data?.details[0]?.diet_days?.[dayIndex]?.meals?.[mealIndex]
                ?.meal_items[mealItemIndex];
            const servingSize = mealItem.serving_size;

            if (servingSize !== backendDataDetails?.serving_size) {
              const newValues = {
                fat: (
                  ((backendDataDetails?.fat || 0) /
                    backendDataDetails?.serving_size) *
                  servingSize
                ).toFixed(2),
                carbohydrates: (
                  ((backendDataDetails?.carbohydrates || 0) /
                    backendDataDetails?.serving_size) *
                  servingSize
                ).toFixed(2),
                protein: (
                  ((backendDataDetails?.protein || 0) /
                    backendDataDetails?.serving_size) *
                  servingSize
                ).toFixed(2),
                fibre: (
                  ((backendDataDetails?.fibre || 0) /
                    backendDataDetails?.serving_size) *
                  servingSize
                ).toFixed(2),
                calories: (
                  ((backendDataDetails?.calories || 0) /
                    backendDataDetails?.serving_size) *
                  servingSize
                ).toFixed(2),
                sugar: (
                  ((backendDataDetails?.sugar || 0) /
                    backendDataDetails?.serving_size) *
                  servingSize
                ).toFixed(2),
                sodium: (
                  ((backendDataDetails?.sodium || 0) /
                    backendDataDetails?.serving_size) *
                  servingSize
                ).toFixed(2),
              };

              Object.entries(newValues).forEach(([key, value]) => {
                const currentValue = mealItem[key];
                if (currentValue !== value) {
                  setValue(
                    `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].${key}`,
                    value,
                    {
                      shouldDirty: true,
                    }
                  );
                }
              });
            }
          }
        });
      });
    });
  }, [watchedDays, setValue, data]);

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
        items: meal.items.map((mealItem: any) => ({
          item_title: mealItem.item_title?.food_name ?? mealItem.item_title,
          serving_size: mealItem.serving_size,
          serving_unit: mealItem.serving_unit,
          fat: mealItem.fat,
          carbohydrates: mealItem.carbohydrates,
          protein: mealItem.protein,
          fibre: mealItem.fibre,
          calories: mealItem.calories,
          sugar: mealItem.sugar,
          sodium: mealItem.sodium,
          note: mealItem.note,
        })),
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
