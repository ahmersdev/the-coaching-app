import { RHFTextField, RHFAutocomplete } from "@/components/react-hook-form";

export const planOneDataArray = [
  {
    id: 1,
    componentProps: {
      name: "proteins",
      label: "Proteins",
      placeholder: "Enter proteins in gram",
      bgcolor: "secondary.800",
    },
    component: RHFTextField,
    md: 3,
  },
  {
    id: 2,
    componentProps: {
      name: "carbs",
      label: "Carbs",
      placeholder: "Enter carbs in gram",
      bgcolor: "secondary.800",
    },
    component: RHFTextField,
    md: 3,
  },
  {
    id: 3,
    componentProps: {
      name: "fat",
      label: "Fat",
      placeholder: "Enter fat in gram",
      bgcolor: "secondary.800",
    },
    component: RHFTextField,
    md: 3,
  },
  {
    id: 4,
    componentProps: {
      name: "type",
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
      name: "note",
      label: "Add Note",
      placeholder: "Add Some Details",
      multiline: true,
      rows: 3,
      bgcolor: "secondary.800",
    },
    component: RHFTextField,
  },
];
