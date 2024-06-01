import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const gymAddressFormValidationSchema: any = Yup?.object()?.shape({
  address_line_1: Yup?.string()
    ?.trim()
    ?.required("Street Number & Name is Required"),
  address_line_2: Yup?.string()?.trim(),
  city: Yup?.string()?.trim()?.required("City is Required"),
  state: Yup?.string()?.trim()?.required("State is Required"),
  zip: Yup?.string()?.trim()?.required("Postal Code is Required"),
  country: Yup?.string()?.trim()?.required("Country is Required"),
});

export const gymAddressFormDefaultValues = ({ initialValues }: any) => ({
  address_line_1: initialValues?.address_line_1 ?? "",
  address_line_2: initialValues?.address_line_2 ?? "",
  city: initialValues?.city ?? "",
  state: initialValues?.state ?? "",
  zip: initialValues?.zip ?? "",
  country: initialValues?.country ?? "",
});

export const gymAddressDataArray = [
  {
    id: 1,
    componentProps: {
      name: "address_line_1",
      label: "Street",
    },
    component: RHFTextField,
    md: 10,
  },
  {
    id: 2,
    componentProps: {
      name: "address_line_2",
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
      name: "zip",
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
