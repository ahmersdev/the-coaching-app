"use client";

import { Box, Chip, Divider, Grid, Stack, Typography } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { SYSTEM_ADMIN } from "@/constants/routes";
import Link from "next/link";
import { ArrowBackIcon, ThreePersonIcon, TwoPersonIcon } from "@/assets/icons";
import {
  coachOverviewColumns,
  coachesOverviewDataArray,
  headerOverviewData,
} from "./overview.data";
import dayjs from "dayjs";
import TanstackTable from "@/components/table";

const Overview = () => {
  const searchParams = useSearchParams();
  searchParams.get("coachId");

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
      <Box bgcolor={"secondary.main"} p={2.4} borderRadius={4.5}>
        <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
          <TwoPersonIcon />
          <Typography variant={"h6"} fontWeight={700}>
            Coach Details
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2}>
          {headerOverviewData?.map((item: any, index: any) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Box borderRight={1} borderColor={"grey.800"}>
                <Typography
                  variant={"body1"}
                  fontWeight={500}
                  color={"grey.400"}
                >
                  {Object?.keys?.(item)?.[0]}:
                </Typography>
                <Typography variant={"h6"} color={"grey.100"} mt={0.5}>
                  {Object?.keys(item)?.includes("Registration Date") ? (
                    dayjs(item["Registration Date"])?.format("MMM DD, YYYY")
                  ) : Object?.keys(item)?.includes("Subscription Status") ? (
                    <Chip
                      label={item["Subscription Status"]}
                      sx={{
                        color: "grey.100",
                        bgcolor:
                          item["Subscription Status"] === "Paid"
                            ? "primary.main"
                            : "error.700",
                        width: "73px",
                        height: "22px",
                        fontSize: "12px",
                      }}
                    />
                  ) : (
                    item[Object?.keys?.(item)?.[0]]
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
          <Typography variant={"h6"} fontWeight={700}>
            Angus Clients
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <TanstackTable
          data={coachesOverviewDataArray}
          columns={coachOverviewColumns}
          isPagination
        />
      </Box>
    </Stack>
  );
};

export default Overview;
