"use client";

import { ShortLogoIcon } from "@/app/_assets";
import { Box, Typography } from "@mui/material";

const SignIn = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <ShortLogoIcon />
      <Typography variant={"h1"} fontWeight={800}>
        Sign In to Coaching App
      </Typography>
    </Box>
  );
};

export default SignIn;
