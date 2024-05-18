"use client";

import { useState } from "react";
import OTPInput from "react-otp-input";
import { LineIcon, ShortLogoIcon } from "@/assets/icons";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { AUTH } from "@/constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { pxToRem } from "@/utils/get-font-value";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { usePostOtpVerificationMutation } from "@/services/auth";

const Otp = () => {
  const [otp, setOtp] = useState<any>();

  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const router: any = useRouter();

  const theme: any = useTheme();

  const [postOtpVerificationTrigger, postOtpVerificationStatus] =
    usePostOtpVerificationMutation();

  const onSubmit = async (data: any) => {
    const updatedData = {
      code: data,
      email,
    };

    try {
      await postOtpVerificationTrigger(updatedData).unwrap();
      successSnackbar("Please, Enter Gym Address!");
      router.push(`${AUTH.GYM_ADDRESS}?email=${email}`);
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
          Forget Password!?
        </Typography>
        <Box display={"flex"} justifyContent={{ xs: "center", md: "end" }}>
          <LineIcon />
        </Box>
      </Box>

      <Grid container maxWidth={500} mx={"auto"} width={"100%"}>
        <Grid item xs={12}>
          <Typography variant={"h3"} textAlign={"center"} mt={2}>
            Verify Email
          </Typography>
          <Typography variant={"body1"} textAlign={"center"} my={2}>
            Please enter the 4 digit code that we send to you at {email}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <OTPInput
            value={otp}
            onChange={(otp: any) => {
              setOtp(otp);
            }}
            numInputs={4}
            inputStyle={{
              width: 48,
              height: 48,
              fontSize: pxToRem(14),
              border: `1.5px solid ${theme.palette.secondary[600]}`,
              borderRadius: "50%",
              background: theme.palette.secondary[900],
              outline: "none",
              color: theme.palette.grey[100],
            }}
            containerStyle={{ justifyContent: "center", gap: pxToRem(20) }}
            renderInput={(props) => <input {...props} />}
          />
        </Grid>

        <Grid item xs={12} textAlign={"center"}>
          <LoadingButton
            variant={"contained"}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              border: "1px solid",
              borderColor: "primary.main",
              mt: 3,
              mb: 2,
              width: { xs: "100%", md: "70%" },
              "&.Mui-disabled": {
                bgcolor: "primary.main",
              },
            }}
            disableElevation
            type={"submit"}
            onClick={() => onSubmit(otp)}
            loading={postOtpVerificationStatus?.isLoading}
          >
            Next
          </LoadingButton>
        </Grid>
      </Grid>

      <Link href={AUTH.SIGN_IN}>
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

export default Otp;
