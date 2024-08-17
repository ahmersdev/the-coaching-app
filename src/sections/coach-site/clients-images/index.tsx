"use client";

import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { COACH_SITE } from "@/constants/routes";
import Image from "next/image";
import { NextIcon } from "@/assets/icons";
import dayjs from "dayjs";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonTable } from "@/components/skeletons";
import useClientsImages from "./use-clients-images";

export default function ClientsImages() {
  const { theme, isLoading, isFetching, isError, sortedData, data } =
    useClientsImages();

  return (
    <>
      {isLoading || isFetching ? (
        <SkeletonTable />
      ) : isError ? (
        <ApiErrorState />
      ) : (
        <>
          <Typography variant={"h3"} mb={2}>
            Recently Uploaded Progress By Clients
          </Typography>

          <Grid container spacing={2}>
            {sortedData?.map((item: any) => (
              <Grid item xs={12} sm={6} md={3} key={item?.id}>
                <Box bgcolor={"secondary.main"} p={2} borderRadius={3}>
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <Avatar
                      src={item?.client?.profile_picture}
                      sx={{ width: 44, height: 44 }}
                    />
                    <Box color={"grey.100"}>
                      <Typography variant={"h6"} fontWeight={600}>
                        {item?.client?.full_name}
                      </Typography>
                      <Typography
                        variant={"body1"}
                        fontWeight={600}
                        color={"grey.400"}
                      >
                        @{item?.client?.username}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Link
                    href={{
                      pathname: COACH_SITE?.CLIENTS_IMAGES_OVERVIEW,
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
                      Progress Images
                    </Button>
                  </Link>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography variant={"h3"} my={2}>
            Progress By All Clients
          </Typography>

          <Grid container spacing={2}>
            {data?.check_in_details?.map((item: any) => (
              <Grid item key={item?.id}>
                <Box
                  borderRadius={3}
                  bgcolor={"secondary.900"}
                  boxShadow={theme?.CustomShadows?.()?.secondary}
                  overflow={"hidden"}
                >
                  <Image
                    src={item?.check_in_pictures?.[0]?.picture}
                    width={212}
                    height={198}
                    alt={item?.name}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Box p={1}>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      mb={1}
                    >
                      <Typography variant={"h6"} fontWeight={700}>
                        {dayjs(item?.updated_at)?.format("MMM DD, YYYY")}
                      </Typography>
                      <Link
                        href={{
                          pathname: COACH_SITE?.CLIENTS_IMAGES_OVERVIEW,
                          query: { clientId: item?.client_id },
                        }}
                      >
                        <NextIcon />
                      </Link>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                      <Avatar
                        src={item?.client?.profile_picture}
                        sx={{ width: 44, height: 44 }}
                      />
                      <Box color={"grey.100"}>
                        <Typography variant={"h6"} fontWeight={600}>
                          {item?.client?.full_name}
                        </Typography>
                        <Typography
                          variant={"body1"}
                          fontWeight={600}
                          color={"grey.400"}
                        >
                          @{item?.client?.username}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
