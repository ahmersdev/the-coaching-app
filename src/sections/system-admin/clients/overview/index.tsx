"use client";

import { ArrowBackIcon, ThreePersonIcon, TwoPersonIcon } from "@/assets/icons";
import { SYSTEM_ADMIN } from "@/constants/routes";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  clientsOverviewDataArray,
  headerOverviewData,
  clientsOverviewColumns,
} from "./overview.data";
import dayjs from "dayjs";
import TanstackTable from "@/components/table";

const Overview = () => {
  const searchParams = useSearchParams();
  searchParams.get("clientId");

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
      <Box bgcolor={"secondary.main"} p={2.4} borderRadius={4.5}>
        <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
          <ThreePersonIcon />
          <Typography variant={"h6"} fontWeight={700}>
            Client Details
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
                  {Object?.keys(item)?.includes("Registration Date")
                    ? dayjs(item["Registration Date"])?.format("MMM DD, YYYY")
                    : item[Object?.keys?.(item)?.[0]]}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box bgcolor={"secondary.main"} p={2.4} borderRadius={4.5}>
        <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
          <TwoPersonIcon />
          <Typography variant={"h6"} fontWeight={700}>
            John Recent Coaches
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <TanstackTable
          data={clientsOverviewDataArray}
          columns={clientsOverviewColumns}
          isPagination
        />
      </Box>
    </Stack>
  );
};

export default Overview;
