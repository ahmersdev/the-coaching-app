import { mealItemsDefaultValues } from "@/sections/coach-site/clients/assign-diet.data";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useFieldArray } from "react-hook-form";
import {
  useDeleteDietMealItemMutation,
  useLazyGetFoodListSearchQuery,
} from "@/services/coach-site/clients";

export default function useMealItems({
  control,
  dayIndex,
  clientId,
  dietPlanId,
  dietDayId,
  mealIndex,
  mealId,
}: any) {
  const {
    fields: mealItemField,
    append: mealItemAppend,
    remove: mealItemRemove,
  } = useFieldArray({
    control,
    name: `days[${dayIndex}].meals[${mealIndex}].items`,
  });

  const handleAddMeal = () => {
    mealItemAppend(mealItemsDefaultValues);
  };

  const [deleteDietMealItemTrigger] = useDeleteDietMealItemMutation();

  const handleRemoveMeal = async (mealItemIndex: any) => {
    const mealItemToRemove: any = mealItemField[mealItemIndex];

    const dietMealItemId = mealItemToRemove?.item_id;

    console.log(mealId);

    if (dietDayId && dietPlanId && mealId && dietMealItemId) {
      const params = {
        client_id: clientId,
        diet_plan_id: dietPlanId,
        diet_day_id: dietDayId,
        meal_id: mealId,
        meal_items_id: dietMealItemId,
      };
      try {
        await deleteDietMealItemTrigger(params).unwrap();
        successSnackbar("Meal Item removed successfully!");
      } catch (error: any) {
        errorSnackbar(error?.data?.error);
        return;
      }
    } else {
      mealItemRemove(mealItemIndex);
    }
  };

  const apiQueryFood = useLazyGetFoodListSearchQuery();

  return { mealItemField, handleRemoveMeal, handleAddMeal, apiQueryFood };
}
