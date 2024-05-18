import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const myProfileFormValidationSchema = Yup?.object()?.shape({
  name: Yup?.string()?.trim()?.required("Required"),
  username: Yup?.string()?.trim()?.required("Required"),
  email: Yup?.string()
    ?.trim()
    ?.required("Required")
    ?.email("Enter Valid Email, this email doesn’t exist"),
});

export const myProfileFormDefaultValues = {
  name: "",
  username: "",
  email: "",
};

export const myProfileDataArray = [
  {
    id: 1,
    componentProps: {
      name: "name",
      label: "Name",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 2,
    componentProps: {
      name: "username",
      label: "User Name",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 3,
    componentProps: {
      name: "email",
      label: "Email",
      type: "email",
    },
    component: RHFTextField,
    md: 5,
  },
];
