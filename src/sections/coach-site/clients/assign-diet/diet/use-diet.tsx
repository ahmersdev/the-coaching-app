import { useFieldArray } from "react-hook-form";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { mealDefaultValues } from "../assign-diet.data";
import { useDeleteDietMealMutation } from "@/services/coach-site/clients";

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

    console.log(dietDayId, dietPlanId, dietField);

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

  return { dietField, handleAddMeal, handleRemoveMeal };
}
