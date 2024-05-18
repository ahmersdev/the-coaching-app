import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const addressFormValidationSchema = Yup?.object()?.shape({
  street: Yup?.string()?.trim()?.required("Required"),
  city: Yup?.string()?.trim()?.required("Required"),
  state: Yup?.string()?.trim()?.required("Required"),
  postalCode: Yup?.string()?.trim()?.required("Required"),
  country: Yup?.string()?.trim()?.required("Required"),
});

export const addressFormDefaultValues = {
  street: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

export const addressDataArray = [
  {
    id: 1,
    componentProps: {
      name: "street",
      label: "Street",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 2,
    componentProps: {
      name: "city",
      label: "City",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 3,
    componentProps: {
      name: "state",
      label: "State / Province",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 4,
    componentProps: {
      name: "postalCode",
      label: "Postal Code",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 5,
    componentProps: {
      name: "country",
      label: "Country",
    },
    component: RHFTextField,
    md: 5,
  },
];
