import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const gymDetailsFormValidationSchema = Yup?.object()?.shape({
  name: Yup?.string()?.trim()?.required("Required"),
  slang: Yup?.string()?.trim()?.required("Required"),
  email: Yup?.string()
    ?.trim()
    ?.required("Required")
    ?.email("Enter Valid Email, this email doesn’t exist"),
  phone: Yup?.string()?.trim()?.required("Required"),
});

export const gymDetailsFormDefaultValues = {
  name: "",
  slang: "",
  email: "",
  phone: "",
};

export const gymDetailsDataArray = [
  {
    id: 1,
    componentProps: {
      name: "name",
      label: "Gym Name",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 2,
    componentProps: {
      name: "slang",
      label: "Gym Slang",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 3,
    componentProps: {
      name: "email",
      label: "Gym Email",
      type: "email",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 4,
    componentProps: {
      name: "phone",
      label: "Gym Phone",
    },
    component: RHFTextField,
    md: 5,
  },
];
