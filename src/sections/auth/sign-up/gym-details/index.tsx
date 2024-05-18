"use client";

import { LineIcon, ShortLogoIcon } from "@/assets/icons";
import { AUTH } from "@/constants/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  gymDetailsDataArray,
  gymDetailsFormDefaultValues,
  gymDetailsFormValidationSchema,
} from "./gym-details.data";
import { FormProvider } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { usePostGymIntroMutation } from "@/services/auth";

export default function GymDetails() {
  const router: any = useRouter();

  const methods: any = useForm({
    resolver: yupResolver(gymDetailsFormValidationSchema),
    defaultValues: gymDetailsFormDefaultValues,
  });

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const addressId = searchParams.get("addressId");

  const { handleSubmit } = methods;

  const [postGymIntroTrigger, postGymIntroStatus] = usePostGymIntroMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      coach_email: email,
      gym_address_id: addressId,
      ...data,
    };

    try {
      await postGymIntroTrigger(updatedData).unwrap();
      successSnackbar("Please, Sign In to Continue");
      router.push(AUTH.SIGN_IN);
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
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
        <Grid container spacing={2} maxWidth={600} mx={"auto"} width={"100%"}>
          <Grid item xs={12}>
            <Typography variant={"h3"} textAlign={"center"} mt={2}>
              Gym Intro
            </Typography>
          </Grid>

          {gymDetailsDataArray.map((item: any) => (
            <Grid item xs={12} md={item.md} key={item.id}>
              <item.component {...item.componentProps} size={"small"} />
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
                "&.Mui-disabled": {
                  bgcolor: "primary.main",
                },
              }}
              disableElevation
              type={"submit"}
              loading={postGymIntroStatus?.isLoading}
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>

      <Link href={AUTH.SIGN_IN}>
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
