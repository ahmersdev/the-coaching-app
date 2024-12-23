import { useFieldArray } from "react-hook-form";
import { mealItemsDefaultValues } from "../../assign-diet.data";
import { useDeleteDietMealMutation } from "@/services/coach-site/clients";
import { errorSnackbar, successSnackbar } from "@/utils/api";

export default function useMeal({
  control,
  dayIndex,
  clientId,
  dietPlanId,
  dietDayId,
}: any) {
  const {
    fields: mealsField,
    append: mealsAppend,
    remove: mealsRemove,
  } = useFieldArray({
    control,
    name: `days[${dayIndex}].meals`,
  });

  const handleAddMeal = () => {
    const nextMealIndex = mealsField.length + 1;
    mealsAppend({
      items: [mealItemsDefaultValues],
      meal_title: `Meal ${nextMealIndex}`,
    });
  };

  const [deleteDietMealTrigger] = useDeleteDietMealMutation();

  const handleRemoveMeal = async (mealIndex: any) => {
    const mealToRemove: any = mealsField[mealIndex];

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
      mealsRemove(mealIndex);
    }
  };

  return { mealsField, handleRemoveMeal, handleAddMeal };
}
