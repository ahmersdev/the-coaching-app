import { EmailIcon, ForgotPasswordIcon } from "@/assets/icons";
import { RHFTextField } from "@/components/react-hook-form";
import { Phone } from "@mui/icons-material";
import * as Yup from "yup";
import { IconButton, InputAdornment } from "@mui/material";
import { EyeWithoutBgIcon, EyeSlashIcon } from "@/assets/icons";
import { PASSWORD_MESSAGE, PASSWORD_REGEX, PHONE_REGEX } from "@/constants";

export const signUpFormValidationSchema = Yup.object().shape({
  username: Yup.string().trim().required("Username is Required"),
  full_name: Yup.string().trim().required("Name is Required"),
  email: Yup.string()
    .trim()
    .required("Email is Required")
    .email("Enter Valid Email"),
  phone: Yup.string()
    .trim()
    .required("Phone is Required")
    .matches(PHONE_REGEX, "Enter a Valid Phone"),
  password: Yup.string()
    .trim()
    .required("Password is Required")
    .matches(PASSWORD_REGEX, PASSWORD_MESSAGE),
  confirmPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password")], "Password must match"),
});

export const signUpFormDefaultValues = {
  username: "",
  full_name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export const signUpDataArray = [
  {
    id: 1,
    componentProps: {
      name: "full_name",
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
      name: "phone",
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

export const getSetPasswordDataArray = (
  togglePasswordVisibility: any,
  passwordVisibility: any
) => {
  return [
    {
      id: 1,
      componentProps: {
        name: "password",
        placeholder: "Enter Password",
        borderRadius: 25,
        type: passwordVisibility.password ? "text" : "password",
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => togglePasswordVisibility("password")}
              >
                {passwordVisibility.password ? (
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
    },
    {
      id: 2,
      componentProps: {
        name: "confirmPassword",
        placeholder: "Confirm Password",
        borderRadius: 25,
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
    },
  ];
};
