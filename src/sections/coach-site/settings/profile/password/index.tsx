import { FormProvider } from "@/components/react-hook-form";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import {
  getPasswordDataArray,
  passwordFormDefaultValues,
  passwordFormValidationSchema,
} from "./password.data";
import { useState } from "react";
import { PasswordIcon } from "@/assets/icons";
import { successSnackbar } from "@/utils/api";

const Password = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const methods: any = useForm({
    resolver: yupResolver(passwordFormValidationSchema),
    defaultValues: passwordFormDefaultValues,
  });

  const togglePasswordVisibility = (field: any) => {
    setPasswordVisibility((prev: any) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const passwordDataArray = getPasswordDataArray(
    togglePasswordVisibility,
    passwordVisibility
  );

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    successSnackbar("Password Updated Successfully!");
    reset(passwordFormDefaultValues);
  };

  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"flex-end"} gap={1}>
        <PasswordIcon />
        <Typography variant={"h6"} fontWeight={700} color={"grey.100"} mb={1}>
          Password
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {passwordDataArray?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component {...item?.componentProps} size={"small"} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <LoadingButton
              variant={"contained"}
              sx={{
                color: "grey.100",
                width: 132,
                borderRadius: 25,
                border: "1px solid",
                borderColor: "primary.main",
              }}
              disableElevation
              type={"submit"}
            >
              Update
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default Password;
