"use client";

import { LineIcon, ShortLogoIcon } from "@/assets/icons";
import { Box, Grid, Typography } from "@mui/material";
import { FormProvider } from "@/components/react-hook-form";
import { gymAddressDataArray } from "./gym-address.data";
import Link from "next/link";
import { AUTH } from "@/constants/routes";
import { LoadingButton } from "@mui/lab";
import useGymAddress from "./use-gym-address";

export default function GymAddress() {
  const { methods, handleSubmit, onSubmit, postGymAddressStatus } =
    useGymAddress();

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
              Gym Address
            </Typography>
          </Grid>

          {gymAddressDataArray.map((item: any) => (
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
                mt: 3,
                mb: 2,
                "&.Mui-disabled": {
                  backgroundColor: "primary.main",
                },
              }}
              disableElevation
              type={"submit"}
              loading={postGymAddressStatus?.isLoading}
            >
              Next
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
