import { EmailIcon } from "@/app/_assets";
import { RHFTextField } from "@/app/_components/react-hook-form";
import { InputAdornment } from "@mui/material";
import * as Yup from "yup";

export const signInFormValidationSchema = Yup?.object()?.shape({
  email: Yup?.string()
    ?.trim()
    ?.required("Required")
    ?.email("Enter Valid Email, this email doesn’t exist"),
  password: Yup?.string()?.trim()?.required("Required"),
});

export const signInFormDefaultValues = {
  email: "",
  password: "",
};

export const signInDataArray = [
  {
    id: 1,
    componentProps: {
      name: "email",
      type: "email",
      placeholder: "Enter Your Email ID or User Name",
      borderRadius: 25,
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <EmailIcon />
          </InputAdornment>
        ),
      },
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 2,
    componentProps: {
      name: "password",
      placeholder: "Enter Password",
      borderRadius: 25,
    },
    component: RHFTextField,
    md: 5,
  },
];
