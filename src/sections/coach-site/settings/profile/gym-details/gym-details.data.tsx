import { RHFTextField } from "@/components/react-hook-form";
import { PHONE_REGEX } from "@/constants";
import * as Yup from "yup";

export const gymDetailsFormValidationSchema = Yup?.object()?.shape({
  name: Yup?.string()?.trim()?.required("Name is Required"),
  slang: Yup?.string()?.trim()?.required("Slang is Required"),
  email: Yup?.string()
    ?.trim()
    ?.required("Email is Required")
    ?.email("Enter Valid Email, this email doesn’t exist"),
  phone: Yup.string()
    .trim()
    .required("Gym Phone is Required")
    .matches(PHONE_REGEX, "Enter a Valid Phone"),
});

export const gymDetailsFormDefaultValues = ({ initialValues }: any) => ({
  name: initialValues?.name ?? "",
  slang: initialValues?.slang ?? "",
  email: initialValues?.email ?? "",
  phone: initialValues?.phone ?? "",
});

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
