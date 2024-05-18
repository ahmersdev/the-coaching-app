"use client";

import { LineIcon, ShortLogoIcon } from "@/assets/icons";
import { Box, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { AUTH } from "@/constants/routes";
import {
  forgotPasswordDataArray,
  forgotPasswordFormDefaultValues,
  forgotPasswordFormValidationSchema,
} from "./forgot-password.data";
import { useRouter } from "next/navigation";
import { successSnackbar } from "@/utils/api";

const ForgotPassword = () => {
  const router: any = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(forgotPasswordFormValidationSchema),
    defaultValues: forgotPasswordFormDefaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    successSnackbar("Check your email!");
    reset(forgotPasswordFormDefaultValues);
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
          Forgot Password!?
        </Typography>
        <Box display={"flex"} justifyContent={{ xs: "center", md: "end" }}>
          <LineIcon />
        </Box>
      </Box>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container maxWidth={500} mx={"auto"} width={"100%"}>
          <Grid item xs={12}>
            <Typography variant={"h3"} textAlign={"center"} mt={2}>
              Enter Your Email Address
            </Typography>
          </Grid>
          {forgotPasswordDataArray?.map((item: any) => (
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
                "&.Mui-disabled": {
                  bgcolor: "primary.main",
                },
              }}
              disableElevation
              type={"submit"}
            >
              Next
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

export default ForgotPassword;
