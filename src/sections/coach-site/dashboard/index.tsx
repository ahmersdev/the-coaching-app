"use client";

import { Stack } from "@mui/material";
import Header from "./header";
import {
  headerCardsArray,
  newClientsArray,
  latestClientsArray,
} from "./dashboard.data";
import NewClients from "./new-clients";
import LatestClients from "./latest-clients";

const Dashboard = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Header name={"John"} headerCardsArray={headerCardsArray} />

      <NewClients newClientsArray={newClientsArray} />

      <LatestClients latestClientsArray={latestClientsArray} />
    </Stack>
  );
};

export default Dashboard;
