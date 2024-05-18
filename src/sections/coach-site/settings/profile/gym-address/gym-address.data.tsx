import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const gymAddressFormValidationSchema = Yup?.object()?.shape({
  street: Yup?.string()?.trim()?.required("Required"),
  apartment: Yup?.string()?.trim()?.required("Required"),
  city: Yup?.string()?.trim()?.required("Required"),
  state: Yup?.string()?.trim()?.required("Required"),
  postalCode: Yup?.string()?.trim()?.required("Required"),
  country: Yup?.string()?.trim()?.required("Required"),
});

export const gymAddressFormDefaultValues = {
  street: "",
  apartment: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
};

export const gymAddressDataArray = [
  {
    id: 1,
    componentProps: {
      name: "street",
      label: "Street",
    },
    component: RHFTextField,
    md: 10,
  },
  {
    id: 2,
    componentProps: {
      name: "apartment",
      label: "Apartment",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 3,
    componentProps: {
      name: "city",
      label: "City",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 4,
    componentProps: {
      name: "state",
      label: "State / Province",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 5,
    componentProps: {
      name: "postalCode",
      label: "Postal Code",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 6,
    componentProps: {
      name: "country",
      label: "Country",
    },
    component: RHFTextField,
    md: 10,
  },
];
