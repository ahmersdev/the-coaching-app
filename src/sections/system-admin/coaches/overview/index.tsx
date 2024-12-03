"use client";

import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { SYSTEM_ADMIN } from "@/constants/routes";
import Link from "next/link";
import { ArrowBackIcon, ThreePersonIcon, TwoPersonIcon } from "@/assets/icons";
import { coachOverviewColumns, getCoachDetailsData } from "./overview.data";
import dayjs from "dayjs";
import TanstackTable from "@/components/table";
import { useGetAdminCoachByIdQuery } from "@/services/admin/coaches";
import { SkeletonOverview } from "@/components/skeletons";
import ApiErrorState from "@/components/api-error-state";

const Overview = () => {
  const searchParams = useSearchParams();
  const coachId = searchParams.get("coachId");

  const { data, isLoading, isFetching, isError } = useGetAdminCoachByIdQuery(
    { coach_id: coachId },
    { refetchOnMountOrArgChange: true, skip: !coachId }
  );

  const coachDetailsData = getCoachDetailsData(data?.coach);

  return (
    <Stack direction={"column"} spacing={2}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Link href={SYSTEM_ADMIN?.COACHES}>
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
              <TwoPersonIcon />
              <Typography variant={"h6"} fontWeight={700}>
                Coach Details
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2}>
              {Object.entries(coachDetailsData)?.map(([key, value]: any) => (
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
                      {key === "Registration Date" ? (
                        dayjs(value)?.format("MMM DD, YYYY")
                      ) : key === "Subscription Status" ? (
                        <Chip
                          label={value}
                          sx={{
                            color: "grey.100",
                            bgcolor:
                              value === "Paid" ? "primary.main" : "error.700",
                            width: "73px",
                            height: "22px",
                            fontSize: "12px",
                          }}
                        />
                      ) : (
                        value
                      )}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box bgcolor={"secondary.main"} p={2.4} borderRadius={4.5}>
            <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
              <ThreePersonIcon />
              <Typography
                variant={"h6"}
                fontWeight={700}
                textTransform={"capitalize"}
              >
                {data?.coach?.full_name} Clients
              </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            <TanstackTable
              data={data?.clients}
              columns={coachOverviewColumns}
              isLoading={isLoading}
              isFetching={isFetching}
              isError={isError}
            />
          </Box>
        </>
      )}
    </Stack>
  );
};

export default Overview;
