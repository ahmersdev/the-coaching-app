import { assignDietDefaultValues } from "@/sections/coach-site/assign-diet.data";
import { useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";

export default function useDiet(dietPlans: any) {
  const methods = useForm({
    defaultValues: assignDietDefaultValues,
  });

  const { control, reset } = methods;

  const { fields: daysField } = useFieldArray({
    control,
    name: "days",
  });

  useEffect(() => {
    const originalFormData = dietPlans?.[0].diet_days.map((day: any) => ({
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
  }, [dietPlans, reset]);

  return { methods, control, daysField };
}
