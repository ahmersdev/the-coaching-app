"use client";

import { Stack } from "@mui/material";
import Header from "./header";
import { clientsArray, coachesArray, headerCardsArray } from "./dashboard.data";
import Coaches from "./coaches";
import Clients from "./clients";

const Dashboard = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Header name={"John"} headerCardsArray={headerCardsArray} />

      <Coaches coachesArray={coachesArray} />

      <Clients clientsArray={clientsArray} />
    </Stack>
  );
};

export default Dashboard;
