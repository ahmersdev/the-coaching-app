import { RHFTextField } from "@/components/react-hook-form";

export const macroDefaultValues = {
  macros: [
    {
      title: "",
      protein: null,
      carbs: null,
      fats: null,
      type: "High",
      note: "",
    },
    {
      title: "",
      protein: null,
      carbs: null,
      fats: null,
      type: "Medium",
      note: "",
    },
    {
      title: "",
      protein: null,
      carbs: null,
      fats: null,
      type: "Low",
      note: "",
    },
  ],
};

export const getMacroPlanOneDataArray = (macroIndex: number) => [
  {
    id: 1,
    componentProps: {
      name: `macros[${macroIndex}].title`,
      label: "Title",
      placeholder: "Enter Title",
      bgcolor: "secondary.800",
    },
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: `macros[${macroIndex}].protein`,
      label: "Proteins",
      placeholder: "Enter proteins in gram",
      bgcolor: "secondary.800",
      type: "number",
    },
    component: RHFTextField,
    md: 3,
  },
  {
    id: 3,
    componentProps: {
      name: `macros[${macroIndex}].carbs`,
      label: "Carbs",
      placeholder: "Enter carbs in gram",
      bgcolor: "secondary.800",
      type: "number",
    },
    component: RHFTextField,
    md: 3,
  },
  {
    id: 4,
    componentProps: {
      name: `macros[${macroIndex}].fats`,
      label: "Fat",
      placeholder: "Enter fat in gram",
      bgcolor: "secondary.800",
      type: "number",
    },
    component: RHFTextField,
    md: 3,
  },
  {
    id: 5,
    componentProps: {
      name: `macros[${macroIndex}].type`,
      label: "Macro Type",
      bgcolor: "secondary.800",
      placeholder: "Select type",
      disabled: true,
    },
    component: RHFTextField,
    md: 3,
  },
  {
    id: 6,
    componentProps: {
      name: `macros[${macroIndex}].note`,
      label: "Add Note",
      placeholder: "Add Some Details",
      multiline: true,
      rows: 3,
      bgcolor: "secondary.800",
    },
    component: RHFTextField,
  },
];
