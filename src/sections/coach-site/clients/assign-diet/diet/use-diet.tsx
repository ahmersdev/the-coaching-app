import { useFieldArray } from "react-hook-form";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import {
  useDeleteDietMealMutation,
  useLazyGetFoodListSearchQuery,
} from "@/services/coach-site/clients";
import { mealDefaultValues } from "@/sections/coach-site/clients/assign-diet.data";

export default function useDiet({
  control,
  dayIndex,
  clientId,
  dietPlanId,
  dietDayId,
}: any) {
  const {
    fields: dietField,
    append: dietAppend,
    remove: dietRemove,
  } = useFieldArray({
    control,
    name: `days[${dayIndex}].meals`,
  });

  const handleAddMeal = () => {
    dietAppend(mealDefaultValues.meals);
  };

  const [deleteDietMealTrigger] = useDeleteDietMealMutation();

  const handleRemoveMeal = async (mealIndex: any) => {
    const mealToRemove: any = dietField[mealIndex];

    const dietMealId = mealToRemove?.meal_id;

    if (dietDayId && dietPlanId && dietMealId) {
      const params = {
        client_id: clientId,
        diet_plan_id: dietPlanId,
        diet_day_id: dietDayId,
        meal_id: dietMealId,
      };
      try {
        await deleteDietMealTrigger(params).unwrap();
        successSnackbar("Meal removed successfully!");
      } catch (error: any) {
        errorSnackbar(error?.data?.error);
        return;
      }
    } else {
      dietRemove(mealIndex);
    }
  };

  const apiQueryFood = useLazyGetFoodListSearchQuery();

  return { dietField, handleAddMeal, handleRemoveMeal, apiQueryFood };
}
