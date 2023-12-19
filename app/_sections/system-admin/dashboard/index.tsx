"use client";

import { Stack } from "@mui/material";
import Header from "./header";
import { coachesArray, headerCardsArray } from "./dashboard.data";
import Coaches from "./coaches";

const Dashboard = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Header name={"John"} headerCardsArray={headerCardsArray} />

      <Coaches coachesArray={coachesArray} />
    </Stack>
  );
};

export default Dashboard;
