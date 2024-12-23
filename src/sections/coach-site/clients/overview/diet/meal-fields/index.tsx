import { useFieldArray } from "react-hook-form";
import { Box, Typography } from "@mui/material";
import { RHFTextField } from "@/components/react-hook-form";
import MealItemFields from "./meal-item-fields";

export default function MealFields({ control, dayIndex }: any) {
  const { fields: mealField } = useFieldArray({
    control,
    name: `days[${dayIndex}].meals`,
  });

  return (
    <>
      {mealField.map((meal, mealIndex) => (
        <Box
          bgcolor={"secondary.800"}
          key={meal.id}
          borderRadius={3}
          mt={2}
          p={2}
        >
          <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
            Meal {mealIndex + 1}
          </Typography>

          <Box sx={{ maxWidth: { xs: "100%", md: "50%" }, mt: 2 }}>
            <RHFTextField
              name={`days[${dayIndex}].meals[${mealIndex}].meal_title`}
              label={"Meal Name"}
              placeholder={"Enter Meal Name"}
              disabled
            />
          </Box>
          <MealItemFields
            control={control}
            dayIndex={dayIndex}
            mealIndex={mealIndex}
          />
        </Box>
      ))}
    </>
  );
}
