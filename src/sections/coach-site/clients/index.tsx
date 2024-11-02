"use client";

import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { clientsColumns } from "./clients.data";
import Link from "next/link";
import { COACH_SITE } from "@/constants/routes";
import TanstackTable from "@/components/table";
import useClients from "./use-clients";

export default function Clients() {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    sortedData,
    setPageLimit,
    setPage,
  } = useClients();

  return (
    <>
      <Typography variant={"h2"} color={"grey.100"} mb={2}>
        Latest Client Progressed
      </Typography>

      {isLoading ||
        isFetching ||
        (!isError && (
          <Grid container spacing={2}>
            {sortedData?.map((item: any, index: number) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  bgcolor={"secondary.main"}
                  borderRadius={3}
                  padding={"16px 18px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexDirection={"column"}
                  gap={2}
                  height={"100%"}
                >
                  <Avatar
                    src={item?.profile_picture}
                    sx={{ width: 44, height: 44 }}
                  />
                  <Box textAlign={"center"}>
                    <Typography variant={"h6"} fontWeight={600}>
                      {item?.full_name}
                    </Typography>
                    <Typography
                      variant={"body1"}
                      fontWeight={600}
                      color={"grey.400"}
                    >
                      @{item?.username}
                    </Typography>
                  </Box>
                  <Link
                    href={{
                      pathname: COACH_SITE?.CLIENTS_OVERVIEW,
                      query: { clientId: item?.client_id },
                    }}
                  >
                    <Button
                      variant={"contained"}
                      sx={{
                        color: "grey.100",
                        borderRadius: 25,
                        border: "1px dashed",
                        borderColor: "grey.100",
                        background: "transparent",
                        ":hover": {
                          backgroundColor: "grey.100",
                          color: "grey.900",
                        },
                      }}
                      disableElevation
                    >
                      View Progress
                    </Button>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}

      <Box mt={2}>
        <TanstackTable
          data={data?.clients}
          columns={clientsColumns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isPagination
          setPageLimit={setPageLimit}
          setPage={setPage}
          currentPage={data?.meta?.page}
          count={data?.meta?.pages}
          pageLimit={data?.meta?.limit}
          totalRecords={data?.meta?.total}
          onPageChange={(page: number) => setPage(page)}
        />
      </Box>
    </>
  );
}
