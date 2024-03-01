"use client";

import { LineIcon, ShortLogoIcon } from "@/app/_assets/icons";
import { AUTH } from "@/app/_constants/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  gymDetailsDataArray,
  gymDetailsFormDefaultValues,
  gymDetailsFormValidationSchema,
  introDataArray,
} from "./gym-details.data";
import { FormProvider } from "@/app/_components/react-hook-form";
import { enqueueSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";

export default function GymDetails() {
  const [stepState, setStepState] = useState(false);

  const router: any = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");

  const methods: any = useForm({
    resolver: yupResolver(gymDetailsFormValidationSchema),
    defaultValues: gymDetailsFormDefaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onNext = () => {
    setStepState(true);
  };

  const onSubmit = async (data: any) => {
    console.log(data);
    enqueueSnackbar("Sign Up Successful!", {
      variant: "success",
    });
    reset();
    router?.push(`/`);
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
        <Grid container spacing={2} maxWidth={500} mx={"auto"} width={"100%"}>
          {!stepState ? (
            <>
              <Grid item xs={12}>
                <Typography variant={"h3"} textAlign={"center"} mt={2}>
                  Gym Details
                </Typography>
              </Grid>

              {gymDetailsDataArray?.map((item: any) => (
                <Grid item xs={12} md={item?.md} key={item?.id}>
                  <item.component {...item?.componentProps} size={"small"} />
                </Grid>
              ))}

              <Grid item xs={12}>
                <Button
                  variant={"contained"}
                  fullWidth
                  sx={{
                    color: "grey.100",
                    borderRadius: 25,
                    border: "1px solid",
                    borderColor: "primary.main",
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
              <Grid item xs={12}>
                <Typography variant={"h3"} textAlign={"center"} mt={2}>
                  Short Intro
                </Typography>
              </Grid>

              {introDataArray?.map((item: any) => (
                <Grid item xs={12} key={item?.id}>
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
                  }}
                  disableElevation
                  type={"submit"}
                >
                  Submit
                </LoadingButton>
              </Grid>
            </>
          )}
        </Grid>
      </FormProvider>

      <Link href={AUTH?.SIGN_IN}>
        <Typography variant={"h6"} color={"primary.600"} mt={2}>
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
}
