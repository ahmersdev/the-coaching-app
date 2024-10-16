import { RHFAutocomplete, RHFTextField } from "@/components/react-hook-form";

export const macroFieldsDefaultValues = {
  title: "",
  protein: "",
  carbs: "",
  fats: "",
  type: null,
  note: "",
};

export const macroDefaultValues = {
  macros: [macroFieldsDefaultValues],
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
      options: ["High", "Medium", "Low"],
      placeholder: "Select type",
    },
    component: RHFAutocomplete,
    md: 3,
  },
  {
    id: 5,
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
