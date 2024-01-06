import { EmailIcon } from "@/app/_assets";
import { RHFTextField } from "@/app/_components/react-hook-form";
import { InputAdornment } from "@mui/material";
import * as Yup from "yup";

export const forgotPasswordFormValidationSchema = Yup?.object()?.shape({
  email: Yup?.string()
    ?.trim()
    ?.required("Required")
    ?.email("Enter Valid Email, this email doesn’t exist"),
});

export const forgotPasswordFormDefaultValues = {
  email: "",
};

export const forgotPasswordDataArray = [
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
            <EmailIcon />
          </InputAdornment>
        ),
      },
    },
    component: RHFTextField,
    md: 5,
  },
];
