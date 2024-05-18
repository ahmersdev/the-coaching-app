"use client";

import { Box, Stack, Typography } from "@mui/material";
import Client from "./client";
import { bodyDetailsData, clientDetailsData } from "./overview.data";
import Body from "./body";
import Progress from "./progress";
import Macro from "./macro";
import Training from "./training";
import Diet from "./diet";
import Link from "next/link";
import { ArrowBackIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";

export default function Overview() {
  return (
    <Stack direction={"column"} spacing={2}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Link href={COACH_SITE?.CLIENTS}>
          <ArrowBackIcon />
        </Link>
        <Typography variant={"h3"} fontWeight={600}>
          Overview
        </Typography>
      </Box>

      <Client clientDetailsData={clientDetailsData} />

      <Body bodyDetailsData={bodyDetailsData} />

      <Progress />

      <Macro />

      <Training />

      <Diet />
    </Stack>
  );
}
