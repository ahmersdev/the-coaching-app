"use client";

import { Stack } from "@mui/material";
import Header from "./header";
import Coaches from "./coaches";
import Clients from "./clients";
import useDashboard from "./use-dashboard";

const Dashboard = () => {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    initialLoading,
    coachData,
    coachLoading,
    coachFetching,
    coachError,
    clientData,
    clientLoading,
    clientFetching,
    clientError,
  } = useDashboard();

  return (
    <Stack direction={"column"} spacing={2}>
      <Header
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        initialLoading={initialLoading}
        coachCount={coachData?.meta?.total}
        coachLoading={coachLoading}
        coachFetching={coachFetching}
        coachError={coachError}
        clientCount={clientData?.meta?.total}
        clientLoading={clientLoading}
        clientFetching={clientFetching}
        clientError={clientError}
      />

      {/* <Coaches coachesArray={coachesArray} />

      <Clients clientsArray={clientsArray} /> */}
    </Stack>
  );
};

export default Dashboard;
