import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";
import { IconButton, InputAdornment } from "@mui/material";
import { EyeWithoutBgIcon, EyeSlashIcon } from "@/assets/icons";
import { PASSWORD_MESSAGE, PASSWORD_REGEX } from "@/constants";

export const passwordFormValidationSchema = Yup?.object()?.shape({
  currentPassword: Yup?.string()
    ?.trim()
    ?.required("Current Password is Required"),
  newPassword: Yup.string()
    .trim()
    .required("New Password is Required")
    .matches(PASSWORD_REGEX, PASSWORD_MESSAGE),
  confirmPassword: Yup?.string()
    ?.required("Confirm Password is Required")
    ?.oneOf([Yup.ref("newPassword")], "Password must match"),
});

export const passwordFormDefaultValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const getPasswordDataArray = (
  togglePasswordVisibility: any,
  passwordVisibility: any
) => {
  return [
    {
      id: 1,
      componentProps: {
        name: "currentPassword",
        label: "Current Password",
        type: passwordVisibility.currentPassword ? "text" : "password",
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => togglePasswordVisibility("currentPassword")}
              >
                {passwordVisibility.currentPassword ? (
                  <EyeSlashIcon />
                ) : (
                  <EyeWithoutBgIcon />
                )}
              </IconButton>
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
        name: "newPassword",
        label: "New Password",
        type: passwordVisibility.newPassword ? "text" : "password",
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle new password visibility"
                onClick={() => togglePasswordVisibility("newPassword")}
              >
                {passwordVisibility.newPassword ? (
                  <EyeSlashIcon />
                ) : (
                  <EyeWithoutBgIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        },
      },
      component: RHFTextField,
      md: 5,
    },
    {
      id: 3,
      componentProps: {
        name: "confirmPassword",
        label: "Confirm Password",
        type: passwordVisibility.confirmPassword ? "text" : "password",
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle confirm password visibility"
                onClick={() => togglePasswordVisibility("confirmPassword")}
              >
                {passwordVisibility.confirmPassword ? (
                  <EyeSlashIcon />
                ) : (
                  <EyeWithoutBgIcon />
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
};
