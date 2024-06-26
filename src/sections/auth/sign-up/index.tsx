"use client";

import { LineIcon, ShortLogoIcon } from "@/assets/icons";
import { Box, Button, Grid, Typography } from "@mui/material";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { AUTH, SALE_SITE } from "@/constants/routes";
import { signUpDataArray } from "./sign-up.data";
import { ForgotPasswordIcon } from "@/assets/icons";
import { InputAdornment } from "@mui/material";
import useSignUp from "./use-sign-up";

const SignUp = () => {
  const {
    methods,
    handleSubmit,
    onSubmit,
    stepState,
    errors,
    errorMessages,
    handleNextFirst,
    getUsernameStatus,
    handlePrevStep,
    handleNextSecond,
    setPasswordDataArray,
    postRegisterCoachStatus,
  } = useSignUp();

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
      <Box
        display={"flex"}
        flexDirection={"column"}
        textAlign={"center"}
        mb={2}
      >
        <Typography variant={"h1"} fontWeight={800}>
          Sign Up to Coaching App
        </Typography>
        <Box display={"flex"} justifyContent={{ xs: "center", md: "end" }}>
          <LineIcon />
        </Box>
      </Box>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container maxWidth={500} mx={"auto"} width={"100%"} spacing={2}>
          {stepState === 1 && (
            <>
              <Grid item xs={12}>
                <Typography variant={"h3"} textAlign={"center"}>
                  Claim your User Name!
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <RHFTextField
                  name={"username"}
                  placeholder={"Enter User Name"}
                  borderRadius={25}
                  size={"small"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ForgotPasswordIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                {errors?.username && (
                  <Typography
                    variant={"body2"}
                    textAlign={"center"}
                    color={"error.700"}
                  >
                    {errors.username}
                  </Typography>
                )}
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
                    mt: 1,
                    "&.Mui-disabled": {
                      backgroundColor: "primary.main",
                    },
                  }}
                  disableElevation
                  type={"button"}
                  onClick={handleNextFirst}
                  loading={
                    getUsernameStatus?.isLoading ||
                    getUsernameStatus?.isFetching
                  }
                >
                  Next
                </LoadingButton>
              </Grid>
            </>
          )}

          {stepState === 2 && (
            <>
              {signUpDataArray.map((item: any) => (
                <Grid item xs={12} md={item?.md} key={item.id}>
                  <item.component {...item.componentProps} size={"small"} />
                  {Object.entries(errorMessages).map(
                    ([field, errorMessage]) =>
                      item.componentProps.name === field &&
                      errorMessage && (
                        <Typography
                          key={field}
                          variant={"body2"}
                          textAlign={"center"}
                          color={"error.700"}
                        >
                          {errorMessage}
                        </Typography>
                      )
                  )}
                </Grid>
              ))}

              <Grid item xs={12} display={"flex"} gap={2}>
                <Button
                  variant={"contained"}
                  fullWidth
                  sx={{
                    color: "grey.100",
                    borderRadius: 25,
                    border: "1px dashed",
                    borderColor: "grey.100",
                    background: "transparent",
                    mt: 3,
                    mb: 2,
                    ":hover": {
                      backgroundColor: "grey.100",
                      color: "grey.900",
                    },
                  }}
                  disableElevation
                  type={"button"}
                  onClick={handlePrevStep}
                >
                  Back
                </Button>

                <Button
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
                  type={"button"}
                  onClick={handleNextSecond}
                >
                  Next
                </Button>
              </Grid>
            </>
          )}

          {stepState === 3 && (
            <>
              <Grid item xs={12}>
                <Typography variant={"h3"} textAlign={"center"}>
                  Set Password!
                </Typography>
              </Grid>

              {setPasswordDataArray.map((item: any) => (
                <Grid item xs={12} key={item.id}>
                  <item.component {...item.componentProps} size={"small"} />
                </Grid>
              ))}

              <Grid item xs={12} display={"flex"} gap={2}>
                <Button
                  variant={"contained"}
                  fullWidth
                  sx={{
                    color: "grey.100",
                    borderRadius: 25,
                    border: "1px dashed",
                    borderColor: "grey.100",
                    background: "transparent",
                    mt: 1,
                    ":hover": {
                      backgroundColor: "grey.100",
                      color: "grey.900",
                    },
                  }}
                  disableElevation
                  type={"button"}
                  onClick={handlePrevStep}
                >
                  Back
                </Button>

                <LoadingButton
                  variant={"contained"}
                  fullWidth
                  sx={{
                    color: "grey.100",
                    borderRadius: 25,
                    border: "1px solid",
                    borderColor: "primary.main",
                    mt: 1,
                    "&.Mui-disabled": {
                      bgcolor: "primary.main",
                    },
                  }}
                  disableElevation
                  type={"submit"}
                  loading={postRegisterCoachStatus?.isLoading}
                >
                  Submit
                </LoadingButton>
              </Grid>
            </>
          )}
        </Grid>
      </FormProvider>

      <Typography variant={"body2"} my={2}>
        Already have an account?{" "}
        <Link href={AUTH.SIGN_IN}>
          <Typography
            variant={"body1"}
            component={"span"}
            color={"primary.600"}
            fontWeight={700}
          >
            Sign In
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

export default SignUp;
