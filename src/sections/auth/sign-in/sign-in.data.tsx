import { EmailIcon, EyeSlashIcon, EyeWithoutBgIcon } from "@/assets/icons";
import { RHFTextField } from "@/components/react-hook-form";
import { IconButton, InputAdornment } from "@mui/material";
import * as Yup from "yup";

export const signInFormValidationSchema = Yup?.object()?.shape({
  email: Yup?.string()?.trim()?.required("Required"),
  password: Yup?.string()?.trim()?.required("Required"),
});

export const signInFormDefaultValues = {
  email: "",
  password: "",
};

export const getSignInDataArray = (
  togglePasswordVisibility: any,
  passwordVisibility: any,
  theme: any
) => [
  {
    id: 1,
    componentProps: {
      name: "email",
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
      type: passwordVisibility?.password ? "text" : "password",
      InputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => togglePasswordVisibility("password")}
            >
              {passwordVisibility.password ? (
                <EyeSlashIcon fill={theme?.palette?.grey?.[500]} />
              ) : (
                <EyeWithoutBgIcon fill={theme?.palette?.grey?.[500]} />
              )}
            </IconButton>
          </InputAdornment>
        ),
      },
    },
    component: RHFTextField,
    md: 5,
  },
];
