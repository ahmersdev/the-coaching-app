import { RHFTextField } from "@/components/react-hook-form";
import { PHONE_REGEX } from "@/constants";
import * as Yup from "yup";

export const myProfileFormValidationSchema = Yup?.object()?.shape({
  name: Yup?.string()?.trim()?.required("Name is Required"),
  username: Yup?.string()?.trim()?.required("Username is Required"),
  email: Yup?.string()
    ?.trim()
    ?.required("Email is Required")
    ?.email("Enter Valid Email, this email doesn’t exist"),
  phone: Yup.string()
    .trim()
    .required("Phone is Required")
    .matches(PHONE_REGEX, "Enter a Valid Phone"),
});

export const myProfileFormDefaultValues = ({ initialValues }: any) => ({
  name: initialValues?.full_name ?? "",
  username: initialValues?.username ?? "",
  email: initialValues?.email ?? "",
  phone: initialValues?.phone ?? "",
});

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
      disabled: true,
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
  {
    id: 4,
    componentProps: {
      name: "phone",
      label: "Phone",
    },
    component: RHFTextField,
    md: 5,
  },
];
