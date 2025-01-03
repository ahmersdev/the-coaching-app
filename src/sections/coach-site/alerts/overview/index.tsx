"use client";

import { ArrowBackIcon, DescriptionIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import ClientDetails from "./client-details";
import BodyDetails from "./body-details";
import { useSearchParams } from "next/navigation";
import { useGetClientAlertsOverviewQuery } from "@/services/coach-site/alerts";
import { getBodyDetailsData, getClientDetailsData } from "./overview.data";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonOverview } from "@/components/skeletons";

export default function Overview() {
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");

  const { data, isLoading, isFetching, isError } =
    useGetClientAlertsOverviewQuery(
      { client_id: clientId },
      { refetchOnMountOrArgChange: true, skip: !clientId }
    );

  const clientDetailsData = getClientDetailsData(data?.client);
  const bodyDetailsData = getBodyDetailsData(data?.client);

  return (
    <Stack direction={"column"} spacing={2}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Link href={COACH_SITE?.CLIENTS_ALERTS}>
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
          <ClientDetails clientDetailsData={clientDetailsData} />
          <BodyDetails bodyDetailsData={bodyDetailsData} />
          <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
            <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
              <DescriptionIcon />
              <Typography variant={"h6"} fontWeight={700}>
                Description
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Grid container>
              <Grid item xs={12} md={10}>
                <Typography variant={"h6"} color={"grey.100"}>
                  Lorem ipsum dolor sit amet consectetur. A bibendum porttitor
                  aliquam sit viverra. Tristique tellus ut ipsum malesuada
                  aliquet lectus cursus ut. Nulla sit imperdiet scelerisque
                  ultricies quam ultricies pharetra felis nibh. Vulputate enim
                  diam magna amet elit leo facilisis. Auctor sit et turpis
                  suscipit tempor netus lacus. Nulla malesuada odio duis
                  porttitor fames. Penatibus et commodo aliquam at massa risus
                  feugiat amet aliquet. Morbi nunc tincidunt nibh nibh magna
                  auctor feugiat ultrices. Vel enim morbi eu accumsan ornare
                  interdum augue non proin. Nunc arcu feugiat nec aliquam at.
                  Mauris faucibus suspendisse neque elit ultrices elit aenean
                  proin venenatis. Eget dictum at tincidunt et eget. Ligula sed
                  nibh quam proin. Blandit fusce urna ullamcorper scelerisque
                  volutpat laoreet sed posuere.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Stack>
  );
}
