"use client";

import { FormProvider } from "@/app/_components/react-hook-form";
import { Box, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import {
  createPasswordFormDefaultValues,
  createPasswordFormValidationSchema,
  getCreatePasswordDataArray,
} from "./create-password.data";
import { LineIcon, ShortLogoIcon } from "@/app/_assets/icons";
import Link from "next/link";
import { AUTH } from "@/app/_constants/routes";
import { useSearchParams } from "next/navigation";

const CreatePassword = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    newPassword: false,
    confirmPassword: false,
  });

  const searchParams = useSearchParams();
  const email = searchParams?.get("email");

  const methods: any = useForm({
    resolver: yupResolver(createPasswordFormValidationSchema),
    defaultValues: createPasswordFormDefaultValues,
  });

  const togglePasswordVisibility = (field: any) => {
    setPasswordVisibility((prev: any) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const createPasswordDataArray = getCreatePasswordDataArray(
    togglePasswordVisibility,
    passwordVisibility
  );

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    enqueueSnackbar("Password Created Successfully!", {
      variant: "success",
    });
    reset(createPasswordFormDefaultValues);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      p={2}
    >
      <ShortLogoIcon />
      <Box display={"flex"} flexDirection={"column"} textAlign={"center"}>
        <Typography variant={"h1"} fontWeight={800}>
          Sign Up to Supr.Club
        </Typography>
        <Box display={"flex"} justifyContent={{ xs: "center", md: "end" }}>
          <LineIcon />
        </Box>
      </Box>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container maxWidth={500} mx={"auto"} width={"100%"}>
          <Grid item xs={12}>
            {email ? (
              <Typography variant={"h3"} textAlign={"center"} mt={2}>
                Set Password!
              </Typography>
            ) : (
              <Typography variant={"body1"} textAlign={"center"} mt={2}>
                Your new password must be different from previously used
                password.
              </Typography>
            )}
          </Grid>
          {createPasswordDataArray?.map((item: any) => (
            <Grid item xs={12} key={item?.id} mt={2}>
              <item.component {...item?.componentProps} size={"small"} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <LoadingButton
              variant={"contained"}
              fullWidth
              sx={{
                color: "grey.100",
                borderRadius: 25,
                border: "1px solid",
                borderColor: "primary.main",
                mt: 3,
                mb: 2,
              }}
              disableElevation
              type={"submit"}
            >
              Continue
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>

      <Link href={AUTH?.SIGN_IN}>
        <Typography variant={"h6"} color={"primary.600"}>
          Back to SignIn
        </Typography>
      </Link>

      <Typography
        variant={"body2"}
        fontWeight={700}
        textAlign={"center"}
        mt={3}
      >
        By continuing, you agree to our{" "}
        <Typography
          variant={"body2"}
          component={"span"}
          color={"primary.600"}
          fontWeight={700}
        >
          Terms of Use
        </Typography>{" "}
        and{" "}
        <Typography
          variant={"body2"}
          component={"span"}
          color={"primary.600"}
          fontWeight={700}
        >
          Privacy Policy.
        </Typography>
      </Typography>
    </Box>
  );
};

export default CreatePassword;
