import {
  RHFAutocompleteAsync,
  RHFTextField,
} from "@/components/react-hook-form";

export const mealItemsDefaultValues = {
  item_title: null,
  serving_size: 100,
  serving_unit: "g",
  fat: 0,
  carbohydrates: 0,
  protein: 0,
  fibre: 0,
  calories: 0,
  sugar: 0,
  sodium: 0,
  note: "",
};

export const mealsDefaultValues = {
  meals: [{ meal_title: "Meal 1", items: [mealItemsDefaultValues] }],
};

export const assignDietDefaultValues: any = {
  days: [mealsDefaultValues],
};

export const getAssignDietDataArray = (
  dayIndex: number,
  mealIndex: number,
  mealItemIndex: number,
  apiQueryFood: any
) => [
  {
    id: 1,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].item_title`,
      label: "Item Name",
      placeholder: "Enter Item Name",
      apiQuery: apiQueryFood,
      queryKey: "search_expression",
      getOptionLabel: (option: any) => option?.food_name ?? option,
      isOptionEqualToValue: (option: any, newValue: any) =>
        option?.food_id === newValue?.food_id,
    },
    component: RHFAutocompleteAsync,
    md: 5,
  },
  {
    id: 2,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].serving_size`,
      label: "Serving Size",
      placeholder: "Enter Serving Size",
      type: "number",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 3,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].serving_unit`,
      label: "Serving Unit",
      placeholder: "Enter Serving Unit",
      disabled: true,
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 4,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].fat`,
      label: "Fat",
      placeholder: "Fat",
      disabled: true,
      type: "number",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 5,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].carbohydrates`,
      label: "Carbohydrates",
      placeholder: "Carbohydrates",
      disabled: true,
      type: "number",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 6,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].protein`,
      label: "Protein",
      placeholder: "Protein",
      disabled: true,
      type: "number",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 7,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].fibre`,
      label: "Fiber",
      placeholder: "Fiber",
      disabled: true,
      type: "number",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 8,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].calories`,
      label: "Calories",
      placeholder: "Calories",
      disabled: true,
      type: "number",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 9,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].sugar`,
      label: "Sugar",
      placeholder: "Sugar",
      disabled: true,
      type: "number",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 10,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].sodium`,
      label: "Sodium",
      placeholder: "Sodium",
      disabled: true,
      type: "number",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 11,
    componentProps: {
      name: `days[${dayIndex}].meals[${mealIndex}].items[${mealItemIndex}].note`,
      label: "Add Note",
      placeholder: "Add Some Details",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 10,
  },
];
