"use client";

import { Box, Stack, Typography } from "@mui/material";
import Client from "./client";
import { getBodyDetailsData, getClientDetailsData } from "./overview.data";
import Body from "./body";
import Progress from "./progress";
import Macro from "./macro";
import Training from "./training";
import Diet from "./diet";
import Link from "next/link";
import { ArrowBackIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { useSearchParams } from "next/navigation";
import { useGetCoachClientsByIdQuery } from "@/services/coach-site/clients";
import { SkeletonTable } from "@/components/skeletons";
import ApiErrorState from "@/components/api-error-state";

export default function Overview() {
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");

  const { data, isLoading, isFetching, isError } = useGetCoachClientsByIdQuery(
    { client_id: clientId },
    { refetchOnMountOrArgChange: true, skip: !clientId }
  );

  const clientDetailsData = getClientDetailsData(data?.client);
  const bodyDetailsData = getBodyDetailsData(data?.client);

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

      {isLoading || isFetching ? (
        <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
          <SkeletonTable height={120} />
        </Box>
      ) : isError ? (
        <Box bgcolor={"secondary.main"} borderRadius={3} p={2.4}>
          <ApiErrorState />
        </Box>
      ) : (
        <>
          <Client clientDetailsData={clientDetailsData} clientId={clientId} />

          <Body bodyDetailsData={bodyDetailsData} />

          <Progress checkInDetails={data?.check_in_details} />

          <Macro macroPlans={data?.macro_plans} clientId={clientId} />

          <Training workoutPlans={data?.workout_plans} clientId={clientId} />

          <Diet dietPlans={data?.diet_plans} clientId={clientId} />
        </>
      )}
    </Stack>
  );
}
