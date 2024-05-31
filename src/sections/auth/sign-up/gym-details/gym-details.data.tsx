import { RHFTextField } from "@/components/react-hook-form";
import { PHONE_REGEX } from "@/constants";
import * as Yup from "yup";

export const gymDetailsFormValidationSchema: any = Yup.object().shape({
  name: Yup.string().trim().required("Gym Name is Required"),
  slang: Yup.string().trim(),
  email: Yup.string()
    .trim()
    .required("Email is Required")
    .email("Enter Valid Email"),
  phone: Yup.string()
    .trim()
    .required("Gym Phone is Required")
    .matches(PHONE_REGEX, "Enter a Valid Phone"),
});

export const gymDetailsFormDefaultValues: any = {
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
      placeholder: "Gym Name",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "slang",
      placeholder: "Gym Slang",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "email",
      placeholder: "Gym Email",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "phone",
      placeholder: "Gym Phone Number",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 6,
  },
];
