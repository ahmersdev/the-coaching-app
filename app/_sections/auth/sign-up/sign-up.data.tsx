import { EmailIcon, ForgotPasswordIcon } from "@/app/_assets/icons";
import { RHFTextField } from "@/app/_components/react-hook-form";
import { Phone } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import * as Yup from "yup";

export const signUpFormValidationSchema = Yup?.object()?.shape({
  username: Yup?.string()?.trim()?.required("Required"),
  fullName: Yup?.string()?.trim()?.required("Required"),
  email: Yup?.string()
    ?.trim()
    ?.required("Required")
    ?.email("Enter Valid Email, this email doesn’t exist"),
  phoneNumber: Yup?.string()?.trim()?.required("Required"),
});

export const signUpFormDefaultValues = {
  username: "",
  fullName: "",
  email: "",
  phoneNumber: "",
};

export const signUpDataArray = [
  {
    id: 1,
    componentProps: {
      name: "fullName",
      placeholder: "Enter Your Full Name",
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
  },
  {
    id: 2,
    componentProps: {
      name: "email",
      placeholder: "Enter Your Email ID",
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
  },
  {
    id: 3,
    componentProps: {
      name: "phoneNumber",
      placeholder: "Enter Your Phone Number",
      borderRadius: 25,
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <Phone />
          </InputAdornment>
        ),
      },
    },
    component: RHFTextField,
  },
];
