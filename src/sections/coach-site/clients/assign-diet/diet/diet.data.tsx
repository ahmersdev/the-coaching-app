import { RHFTextField } from "@/components/react-hook-form";

export const getAssignDietDataArray = (dayIndex: number, dietIndex: number) => [
  {
    id: 1,
    componentProps: {
      name: `days[${dayIndex}].meals[${dietIndex}].meal_title`,
      label: "Meal Name",
      placeholder: "Enter Meal Name",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 2,
    componentProps: {
      name: `days[${dayIndex}].meals[${dietIndex}].serving_size`,
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
      name: `days[${dayIndex}].meals[${dietIndex}].serving_unit`,
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
      name: `days[${dayIndex}].meals[${dietIndex}].fat`,
      label: "Fat",
      placeholder: "Enter Fat",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 5,
    componentProps: {
      name: `days[${dayIndex}].meals[${dietIndex}].carbohydrates`,
      label: "Carbohydrates",
      placeholder: "Enter Carbohydrates",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 6,
    componentProps: {
      name: `days[${dayIndex}].meals[${dietIndex}].protein`,
      label: "Protein",
      placeholder: "Enter Protein",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 7,
    componentProps: {
      name: `days[${dayIndex}].meals[${dietIndex}].fibre`,
      label: "Fibre",
      placeholder: "Enter Fibre",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 8,
    componentProps: {
      name: `days[${dayIndex}].meals[${dietIndex}].calories`,
      label: "Calories",
      placeholder: "Enter Calories",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 9,
    componentProps: {
      name: `days[${dayIndex}].meals[${dietIndex}].sugar`,
      label: "Sugar",
      placeholder: "Enter Sugar",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 10,
    componentProps: {
      name: `days[${dayIndex}].meals[${dietIndex}].sodium`,
      label: "Sodium",
      placeholder: "Enter Sodium",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 11,
    componentProps: {
      name: `days[${dayIndex}].meals[${dietIndex}].note`,
      label: "Add Note",
      placeholder: "Add Some Details",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 10,
  },
];
