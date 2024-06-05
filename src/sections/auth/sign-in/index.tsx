"use client";

import { LineIcon, ShortLogoIcon } from "@/assets/icons";
import { Box, Grid, Typography } from "@mui/material";
import { FormProvider } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { AUTH, SALE_SITE } from "@/constants/routes";
import useSignIn from "./use-sign-in";

const SignIn = () => {
  const { methods, handleSubmit, onSubmit, signInDataArray, postSignInStatus } =
    useSignIn();

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
          Sign In to Coaching App
        </Typography>
        <Box display={"flex"} justifyContent={{ xs: "center", md: "end" }}>
          <LineIcon />
        </Box>
      </Box>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container maxWidth={500} mx={"auto"} width={"100%"}>
          {signInDataArray?.map((item: any) => (
            <Grid item xs={12} key={item?.id} mt={2}>
              <item.component {...item?.componentProps} size={"small"} />
            </Grid>
          ))}
          <Grid item xs={12} display={"flex"} justifyContent={"flex-end"}>
            <Link href={AUTH?.FORGOT_PASSWORD}>
              <Typography
                variant={"body1"}
                fontWeight={500}
                width={"fit-content"}
              >
                Forgot Password?
              </Typography>
            </Link>
          </Grid>
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
                "&.Mui-disabled": {
                  bgcolor: "primary.main",
                },
              }}
              disableElevation
              type={"submit"}
              loading={postSignInStatus?.isLoading}
            >
              Sign In
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
      <Typography variant={"body2"} my={2}>
        Don’t have an coaching account?{" "}
        <Link href={AUTH?.SIGN_UP}>
          <Typography
            variant={"body1"}
            component={"span"}
            color={"primary.600"}
            fontWeight={700}
          >
            Sign Up
          </Typography>
        </Link>
        <Typography variant={"body1"} component={"span"} fontWeight={700}>
          {" "}
          |{" "}
        </Typography>
        <Link href={SALE_SITE.HOME}>
          <Typography
            variant={"body1"}
            component={"span"}
            color={"primary.600"}
            fontWeight={700}
          >
            Back to Home
          </Typography>
        </Link>
      </Typography>
      <Typography variant={"body2"} fontWeight={700} textAlign={"center"}>
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

export default SignIn;
