"use client";

import { LineIcon, ShortLogoIcon } from "@/app/_assets/icons";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFTextField } from "@/app/_components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { AUTH } from "@/app/_constants/routes";
import { enqueueSnackbar } from "notistack";
import { useRouter } from "next/navigation";
import {
  signUpDataArray,
  signUpFormDefaultValues,
  signUpFormValidationSchema,
} from "./sign-up.data";
import { useState } from "react";
import { ForgotPasswordIcon } from "@/app/_assets/icons";
import { InputAdornment } from "@mui/material";

const SignUp = () => {
  const [stepState, setStepState] = useState(false);
  const [error, setError] = useState<any>(false);

  const router: any = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(signUpFormValidationSchema),
    defaultValues: signUpFormDefaultValues,
  });

  const { handleSubmit, reset, getValues } = methods;

  const onNext = () => {
    const { username } = getValues();
    if (username?.trim() === "") {
      setError("User name already taken, please try another");
      return;
    }
    setStepState(true);
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    enqueueSnackbar("Check your email!", {
      variant: "success",
    });
    reset(signUpFormDefaultValues);
    router?.push(`${AUTH?.OTP}?email=${data?.email}`);
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
          Sign Up to Coaching App
        </Typography>
        <Box display={"flex"} justifyContent={{ xs: "center", md: "end" }}>
          <LineIcon />
        </Box>
      </Box>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container maxWidth={500} mx={"auto"} width={"100%"}>
          {!stepState ? (
            <>
              <Grid item xs={12}>
                <Typography variant={"h3"} textAlign={"center"} mt={2}>
                  Claim your User Name!
                </Typography>
              </Grid>

              <Grid item xs={12} mt={2}>
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
                {error && (
                  <Typography
                    variant={"body2"}
                    textAlign={"center"}
                    color={"error.700"}
                  >
                    {error}
                  </Typography>
                )}
              </Grid>

              <Grid item xs={12}>
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
                  onClick={onNext}
                >
                  Next
                </Button>
              </Grid>
            </>
          ) : (
            <>
              {signUpDataArray?.map((item: any) => (
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
                  }}
                  disableElevation
                  type={"submit"}
                >
                  Next
                </LoadingButton>
              </Grid>
            </>
          )}
        </Grid>
      </FormProvider>

      <Typography variant={"body2"} my={2}>
        Don’t have an coaching account?{" "}
        <Link href={AUTH?.SIGN_IN}>
          <Typography
            variant={"body1"}
            component={"span"}
            color={"primary.600"}
            fontWeight={700}
          >
            Sign In
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
