import { RHFTextField } from "@/components/react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import useMeal from "./use-meal";
import MealItems from "./meal-items";

export default function Meal({
  control,
  dayIndex,
  clientId,
  dietPlanId,
  dietDayId,
}: any) {
  const { mealsField, handleRemoveMeal, handleAddMeal } = useMeal({
    control,
    dayIndex,
    clientId,
    dietPlanId,
    dietDayId,
  });

  return (
    <>
      {mealsField.map((meal: any, mealIndex) => (
        <Box
          bgcolor={"secondary.900"}
          key={meal.id}
          borderRadius={3}
          mt={2}
          p={2}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ minWidth: { xs: "100%", md: "50%" } }}>
              <RHFTextField
                name={`days[${dayIndex}].meals[${mealIndex}].meal_title`}
                label={"Meal Name"}
                placeholder={"Enter Meal Name"}
              />
            </Box>
            {mealIndex !== 0 && (
              <Typography
                variant={"body1"}
                color={"grey.100"}
                fontWeight={900}
                onClick={() => handleRemoveMeal?.(mealIndex)}
                sx={{ cursor: "pointer" }}
              >
                X
              </Typography>
            )}
          </Box>
          <MealItems
            control={control}
            dayIndex={dayIndex}
            clientId={clientId}
            dietPlanId={dietPlanId}
            dietDayId={dietDayId}
            mealIndex={mealIndex}
            mealId={meal?.meal_id}
          />
          <Button
            variant={"contained"}
            fullWidth
            sx={{
              color: "grey.100",
              borderRadius: 25,
              height: 54,
              border: "1px dashed",
              borderColor: "grey.100",
              background: "transparent",
              mt: 2,
              ":hover": {
                backgroundColor: "grey.100",
                color: "grey.900",
              },
            }}
            disableElevation
            onClick={handleAddMeal}
          >
            Add Another Meal
          </Button>
        </Box>
      ))}
    </>
  );
}
