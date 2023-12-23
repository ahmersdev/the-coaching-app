import { RHFTextField } from "@/app/_components/react-hook-form";
import * as Yup from "yup";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { IconButton, InputAdornment } from "@mui/material";

export const passwordFormValidationSchema = Yup?.object()?.shape({
  currentPassword: Yup?.string()?.trim()?.required("Required"),
  newPassword: Yup?.string()
    ?.trim()
    ?.required("Required")
    ?.max(30, "Password should be less than 30 characters")
    ?.min(8, "Password should contain at least 8 characters")
    ?.matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,30}$/,
      "Password must include at least one uppercase letter, one lowercase letter, one digit, and one special character"
    ),
  confirmPassword: Yup?.string()
    ?.required("Required")
    ?.oneOf([Yup.ref("password")], "Password must match"),
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
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <RemoveRedEyeOutlinedIcon />
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
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <RemoveRedEyeOutlinedIcon />
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
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <RemoveRedEyeOutlinedIcon />
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
