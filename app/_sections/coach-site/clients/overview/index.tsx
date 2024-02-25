"use client";

import { Stack } from "@mui/material";
import Client from "./client";
import { bodyDetailsData, clientDetailsData } from "./overview.data";
import Body from "./body";
import Progress from "./progress";
import Macro from "./macro";
import Training from "./training";
import Diet from "./diet";

export default function Overview() {
  return (
    <Stack direction={"column"} spacing={2}>
      <Client clientDetailsData={clientDetailsData} />

      <Body bodyDetailsData={bodyDetailsData} />

      <Progress />

      <Macro />

      <Training />

      <Diet />
    </Stack>
  );
}
