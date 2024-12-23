import { assignDietDefaultValues } from "@/sections/coach-site/clients/assign-diet.data";
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

    setTimeout(() => reset({ days: originalFormData }), 0);
  }, [dietPlans, reset]);

  return { methods, control, daysField };
}
