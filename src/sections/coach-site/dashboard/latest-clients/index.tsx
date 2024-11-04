import ClientDetailsDialog from "@/components/client-details-dialog";
import { COACH_SITE } from "@/constants/routes";
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
import { useState } from "react";

const LatestClients = ({ latestClientsArray }: any) => {
  const theme: any = useTheme();

  const [showDetails, setShowDetails] = useState({
    open: false,
    details: null,
  });

  return (
    <Box bgcolor={"secondary.main"} borderRadius={"18px"} padding={"24px 22px"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant={"h5"} fontWeight={700}>
          Latest Clients Progressed
        </Typography>

        <Link href={COACH_SITE?.CLIENTS_IMAGES}>
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

      <Grid container spacing={2}>
        {!latestClientsArray?.length ? (
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant={"h6"}>Nothing in the List</Typography>
          </Grid>
        ) : (
          latestClientsArray?.map((item: any) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={item?.id}>
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
                  src={item?.client?.profile_picture}
                  sx={{ width: 44, height: 44 }}
                />
                <Box textAlign={"center"}>
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
                  onClick={() => setShowDetails({ open: true, details: item })}
                >
                  View Details
                </Button>
              </Box>
            </Grid>
          ))
        )}
      </Grid>

      {showDetails?.open && (
        <ClientDetailsDialog
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      )}
    </Box>
  );
};

export default LatestClients;
