import { RHFTextField, RHFUploadFile } from "@/app/_components/react-hook-form";
import * as Yup from "yup";

export const gymDetailsFormValidationSchema: any = Yup?.object()?.shape({
  gymName: Yup?.string()?.trim(),
  gymSlang: Yup?.string()?.trim(),
  street: Yup?.string()?.trim(),
  city: Yup?.string()?.trim(),
  state: Yup?.string()?.trim(),
  postalCode: Yup?.string()?.trim(),
  country: Yup?.string()?.trim(),
  bio: Yup?.string()?.trim(),
  media: Yup?.mixed()?.nullable(),
});

export const gymDetailsFormDefaultValues: any = {
  gymName: "",
  gymSlang: "",
  street: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  bio: "",
  media: null,
};

export const gymDetailsDataArray = [
  {
    id: 1,
    componentProps: {
      name: "gymName",
      placeholder: "Gym Name",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "gymSlang",
      placeholder: "Gym Slang",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "street",
      placeholder: "Enter Street",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "city",
      placeholder: "Enter City",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "state",
      placeholder: "Enter State or Province",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "postalCode",
      placeholder: "Enter Postal Code",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      name: "country",
      placeholder: "Enter Country",
      borderRadius: 25,
    },
    component: RHFTextField,
  },
];

export const introDataArray = [
  {
    id: 1,
    componentProps: {
      name: "bio",
      placeholder: "Short Bio",
      borderRadius: 25,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "media",
      label: "Short Video",
      borderRadius: 25,
    },
    component: RHFUploadFile,
  },
];
