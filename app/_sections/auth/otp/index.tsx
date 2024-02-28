"use client";

import { useState } from "react";
import OTPInput from "react-otp-input";
import { LineIcon, ShortLogoIcon } from "@/app/_assets/icons";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";
import { AUTH } from "@/app/_constants/routes";
import { useRouter, useSearchParams } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { pxToRem } from "@/app/_utils/getFontValue";

const Otp = () => {
  const [otp, setOtp] = useState<any>();

  const searchParams = useSearchParams();
  const email = searchParams?.get("email");
  const register = searchParams?.get("register");
  const router: any = useRouter();

  const theme: any = useTheme();

  const onSubmit = async (data: any) => {
    console.log(data);
    enqueueSnackbar("Create Password!", {
      variant: "success",
    });
    router?.push(`${AUTH?.CREATE_PASSWORD}?email=${email}`);
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
          {register && (
            <Typography variant={"h3"} textAlign={"center"} mt={2}>
              Verify Email
            </Typography>
          )}
          <Typography variant={"body1"} textAlign={"center"} my={2}>
            Please enter the 4 digit code that we send to you at
            {email}
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
              border: `1.5px solid ${theme?.palette?.secondary?.[600]}`,
              borderRadius: "50%",
              background: theme?.palette?.secondary?.[900],
              outline: "none",
              color: theme?.palette?.grey?.[100],
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
            }}
            disableElevation
            type={"submit"}
            onClick={() => onSubmit?.(otp)}
          >
            Next
          </LoadingButton>
        </Grid>
      </Grid>

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

export default Otp;
