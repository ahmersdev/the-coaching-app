"use client";

import { Box, Stack } from "@mui/material";
import Header from "./header";
import { PAGINATION } from "@/config";
import { useGetClientDetailsQuery } from "@/services/coach-site/clients";
import NewClients from "./new-clients";
import { SkeletonCard } from "@/components/skeletons";
import ApiErrorState from "@/components/api-error-state";
import { useGetClientImagesQuery } from "@/services/coach-site/clients-images";
import LatestClients from "./latest-clients";

const Dashboard = () => {
  const params = {
    page: PAGINATION.CURRENT_PAGE,
    limit: PAGINATION.PAGE_LIMIT,
  };

  const {
    data: dataNewClient,
    isLoading: loadingNewClient,
    isFetching: fetchingNewClient,
    isError: errorNewClient,
  } = useGetClientDetailsQuery(params, { refetchOnMountOrArgChange: true });

  const {
    data: dataClientProgress,
    isLoading: loadingClientProgress,
    isFetching: fetchingClientProgress,
    isError: errorClientProgress,
  } = useGetClientImagesQuery({}, { refetchOnMountOrArgChange: true });

  return (
    <Stack direction={"column"} spacing={2}>
      <Header
        clientCount={2}
        loadingNewClient={loadingNewClient}
        fetchingNewClient={fetchingNewClient}
        errorNewClient={errorNewClient}
      />

      {loadingNewClient || fetchingNewClient ? (
        <Box
          bgcolor={"secondary.main"}
          borderRadius={"18px"}
          padding={"24px 22px"}
        >
          <SkeletonCard gridSize={{ sm: 6, md: 4, lg: 2.4 }} length={5} />
        </Box>
      ) : errorNewClient ? (
        <Box
          bgcolor={"secondary.main"}
          borderRadius={"18px"}
          padding={"24px 22px"}
        >
          <ApiErrorState />
        </Box>
      ) : (
        <NewClients newClientsArray={dataNewClient?.clients} />
      )}

      {loadingClientProgress || fetchingClientProgress ? (
        <Box
          bgcolor={"secondary.main"}
          borderRadius={"18px"}
          padding={"24px 22px"}
        >
          <SkeletonCard gridSize={{ sm: 6, md: 4, lg: 2.4 }} length={5} />
        </Box>
      ) : errorClientProgress ? (
        <Box
          bgcolor={"secondary.main"}
          borderRadius={"18px"}
          padding={"24px 22px"}
        >
          <ApiErrorState />
        </Box>
      ) : (
        <LatestClients
          latestClientsArray={dataClientProgress?.check_in_details}
        />
      )}
    </Stack>
  );
};

export default Dashboard;
