import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const gymAddressFormValidationSchema: any = Yup.object().shape({
  address_line_1: Yup.string()
    .trim()
    .required("Street Number & Name is Required"),
  address_line_2: Yup.string().trim(),
  city: Yup.string().trim().required("City is Required"),
  state: Yup.string().trim().required("State is Required"),
  zip: Yup.string().trim().required("Postal Code is Required"),
  country: Yup.string().trim().required("Country is Required"),
});

export const gymAddressFormDefaultValues: any = {
  address_line_1: "",
  address_line_2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

export const gymAddressDataArray = [
  {
    id: 1,
    componentProps: {
      name: "address_line_1",
      placeholder: "Street Number & Name",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 2,
    componentProps: {
      name: "address_line_2",
      placeholder: "Apartment, unit & it’s number",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "city",
      placeholder: "Enter City",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "state",
      placeholder: "Enter State or Province",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "zip",
      placeholder: "Enter Postal Code",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "country",
      placeholder: "Enter Country",
      borderRadius: 25,
    },
    component: RHFTextField,
  },
];
