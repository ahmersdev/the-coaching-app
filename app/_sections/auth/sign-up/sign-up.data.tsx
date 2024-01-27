import { ForgotPasswordIcon } from "@/app/_assets/icons";
import { RHFTextField } from "@/app/_components/react-hook-form";
import { InputAdornment } from "@mui/material";
import * as Yup from "yup";

export const signUpFormValidationSchema = Yup?.object()?.shape({
  email: Yup?.string()
    ?.trim()
    ?.required("Required")
    ?.email("Enter Valid Email, this email doesn’t exist"),
});

export const signUpFormDefaultValues = {
  email: "",
};

export const signUpDataArray = [
  {
    id: 1,
    componentProps: {
      name: "email",
      type: "email",
      placeholder: "Enter Email Address",
      borderRadius: 25,
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <ForgotPasswordIcon />
          </InputAdornment>
        ),
      },
    },
    component: RHFTextField,
    md: 5,
  },
];
