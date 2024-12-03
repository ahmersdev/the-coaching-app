"use client";

import { ArrowBackIcon, ThreePersonIcon, TwoPersonIcon } from "@/assets/icons";
import { SYSTEM_ADMIN } from "@/constants/routes";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getClientDetailsData } from "./overview.data";
import dayjs from "dayjs";
import { useGetAdminCoachClientsByIdQuery } from "@/services/admin/clients";
import { getBodyDetailsData } from "@/utils";
import { SkeletonOverview } from "@/components/skeletons";
import ApiErrorState from "@/components/api-error-state";

const Overview = () => {
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");

  const { data, isLoading, isFetching, isError } =
    useGetAdminCoachClientsByIdQuery(
      { client_id: clientId },
      { refetchOnMountOrArgChange: true, skip: !clientId }
    );

  const clientDetailsData = getClientDetailsData(data?.client);
  const bodyDetailsData = getBodyDetailsData(data?.client);

  return (
    <Stack direction={"column"} spacing={2}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Link href={SYSTEM_ADMIN?.CLIENTS}>
          <ArrowBackIcon />
        </Link>
        <Typography variant={"h3"} fontWeight={600}>
          Overview
        </Typography>
      </Box>

      {isLoading || isFetching ? (
        <SkeletonOverview />
      ) : isError ? (
        <Box bgcolor={"secondary.main"} borderRadius={3} p={2.4}>
          <ApiErrorState />
        </Box>
      ) : (
        <>
          <Box bgcolor={"secondary.main"} p={2.4} borderRadius={4.5}>
            <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
              <ThreePersonIcon />
              <Typography variant={"h6"} fontWeight={700}>
                Client Details
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              {Object.entries(clientDetailsData)?.map(([key, value]: any) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                  <Box borderRight={1} borderColor={"grey.800"}>
                    <Typography
                      variant={"body1"}
                      fontWeight={500}
                      color={"grey.400"}
                    >
                      {key}:
                    </Typography>
                    <Typography variant={"h6"} color={"grey.100"} mt={0.5}>
                      {key === "Registration Date"
                        ? dayjs(value)?.format("MMM DD, YYYY")
                        : value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
            <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
              <TwoPersonIcon />
              <Typography variant={"h6"} fontWeight={700}>
                Body Details
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              {Object.entries(bodyDetailsData).map(([key, value]: any) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
                  <Box borderRight={1} borderColor={"grey.800"}>
                    <Typography
                      variant={"body1"}
                      fontWeight={500}
                      color={"grey.400"}
                    >
                      {key}:
                    </Typography>
                    <Typography variant={"h6"} color={"grey.100"} mt={0.5}>
                      {value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      )}
    </Stack>
  );
};

export default Overview;
