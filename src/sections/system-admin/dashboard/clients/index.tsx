import ApiErrorState from "@/components/api-error-state";
import { SkeletonCard } from "@/components/skeletons";
import { SYSTEM_ADMIN } from "@/constants/routes";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";

const Clients = ({
  clientsArray,
  clientLoading,
  clientFetching,
  clientError,
}: any) => {
  const theme: any = useTheme();

  return (
    <Box bgcolor={"secondary.main"} borderRadius={"18px"} padding={"24px 22px"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant={"h5"} fontWeight={700}>
          New Clients Registered
        </Typography>

        <Link href={SYSTEM_ADMIN?.CLIENTS}>
          <Button
            variant={"contained"}
            sx={{
              color: "primary.main",
              borderRadius: 25,
              border: "1px solid",
              borderColor: "primary.100",
              background: theme?.palette?.gradients?.button1,
              ":hover": {
                background: theme?.palette?.gradients?.button1Hover,
              },
            }}
            disableElevation
          >
            View All
          </Button>
        </Link>
      </Box>

      <Divider sx={{ my: 2 }} />

      {clientLoading || clientFetching ? (
        <SkeletonCard gridSize={{ sm: 6, md: 4, lg: 2.4 }} length={15} />
      ) : clientError ? (
        <ApiErrorState />
      ) : (
        <Grid container spacing={2}>
          {!clientsArray?.length ? (
            <Grid item xs={12} textAlign={"center"}>
              <Typography variant={"h6"}>Nothing in the List</Typography>
            </Grid>
          ) : (
            clientsArray?.map((item: any) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={item?.client_id}>
                <Box
                  bgcolor={"secondary.900"}
                  borderRadius={3}
                  padding={"16px 18px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  flexDirection={"column"}
                  gap={2}
                  sx={{
                    ":hover": {
                      boxShadow: theme?.CustomShadows?.()?.primary,
                    },
                  }}
                  height={"100%"}
                >
                  <Avatar
                    src={item?.profile_picture}
                    sx={{ width: 44, height: 44, bgcolor: "primary.main" }}
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
                      pathname: SYSTEM_ADMIN?.CLIENTS_OVERVIEW,
                      query: {
                        clientId: item?.client_id,
                        coachId: item?.coach_id,
                      },
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
                      View Details
                    </Button>
                  </Link>
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      )}
    </Box>
  );
};

export default Clients;
