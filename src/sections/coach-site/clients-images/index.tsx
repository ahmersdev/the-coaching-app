"use client";

import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import dayjs from "dayjs";
import ApiErrorState from "@/components/api-error-state";
import { SkeletonCard } from "@/components/skeletons";
import useClientsImages from "./use-clients-images";
import NoData from "@/components/no-data";
import ClientDetailsDialog from "@/components/client-details-dialog";

export default function ClientsImages() {
  const {
    theme,
    isLoading,
    isFetching,
    isError,
    sortedData,
    data,
    showDetails,
    setShowDetails,
  } = useClientsImages();

  return (
    <>
      {isLoading || isFetching ? (
        <>
          <Typography variant={"h3"} mb={2}>
            Recently Uploaded Progress By Clients
          </Typography>
          <SkeletonCard gridSize={{ sm: 6, md: 3 }} length={8} />
        </>
      ) : isError ? (
        <ApiErrorState />
      ) : !!!data?.check_in_details?.length ? (
        <NoData />
      ) : (
        <>
          <Typography variant={"h3"} mb={2}>
            Recently Uploaded Progress By Clients
          </Typography>

          <Grid container spacing={2}>
            {sortedData?.map((item: any) => (
              <Grid item xs={12} sm={6} md={3} key={item?.id}>
                <Box
                  bgcolor={"secondary.main"}
                  p={2}
                  borderRadius={3}
                  height={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                >
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

                  <Box display={"flex"} flexDirection={"column"}>
                    <Divider sx={{ my: 2 }} />

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
                      onClick={() =>
                        setShowDetails({ open: true, details: item })
                      }
                    >
                      Progress Images
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Typography variant={"h3"} my={2}>
            Progress By All Clients
          </Typography>

          <Grid container spacing={2}>
            {data?.check_in_details?.map((item: any) => (
              <Grid item key={item?.details_id}>
                <Box
                  borderRadius={3}
                  bgcolor={"secondary.900"}
                  boxShadow={theme?.CustomShadows?.()?.secondary}
                  overflow={"hidden"}
                  sx={{ cursor: "pointer" }}
                  onClick={() => setShowDetails({ open: true, details: item })}
                >
                  <Image
                    src={item?.check_in_pictures?.[0]?.picture}
                    width={212}
                    height={198}
                    alt={item?.name}
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Box p={1}>
                    <Typography variant={"h6"} fontWeight={700} mb={1}>
                      {dayjs(item?.updated_at)?.format("MMM DD, YYYY")}
                    </Typography>

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

      {showDetails?.open && (
        <ClientDetailsDialog
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      )}
    </>
  );
}
