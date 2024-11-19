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
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useUpdateAdminPasswordMutation } from "@/services/admin/settings";

const Password = ({ initialValues }: any) => {
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

  const [updateAdminPasswordTrigger, updateAdminPasswordStatus] =
    useUpdateAdminPasswordMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      coach_id: String(initialValues?.coach_id),
      current_password: data?.currentPassword,
      new_password: data?.newPassword,
    };

    try {
      await updateAdminPasswordTrigger(updatedData).unwrap();
      successSnackbar("Password Updated Successfully!");
      reset(passwordFormDefaultValues);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
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
              loading={updateAdminPasswordStatus?.isLoading}
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
