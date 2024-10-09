import { TwoPersonIcon } from "@/assets/icons";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";
import Link from "next/link";
import { NextIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";

export default function Client({ clientDetailsData, clientId }: any) {
  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
        <TwoPersonIcon />
        <Typography variant={"h6"} fontWeight={700}>
          Client Details
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        {Object.entries(clientDetailsData)?.map(([key, value]: any) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
            <Box borderRight={1} borderColor={"grey.800"}>
              <Typography variant={"body1"} fontWeight={500} color={"grey.400"}>
                {key}:
              </Typography>
              <Typography variant={"h6"} color={"grey.100"} mt={0.5}>
                {key === "Registration Date" ? (
                  dayjs(value)?.format("MMM DD, YYYY")
                ) : key === "Diet Plan Status" ? (
                  <Box display={"flex"} alignItems={"end"} gap={1}>
                    <Chip
                      label={value ? "Assigned" : "Not Assigned"}
                      sx={{
                        color: "grey.100",
                        width: 110,
                        backgroundColor: value ? "primary.main" : "error.700",
                      }}
                    />
                    <Link
                      href={{
                        pathname: COACH_SITE?.CLIENTS_ASSIGN_DIET,
                        query: { clientId },
                      }}
                    >
                      <NextIcon />
                    </Link>
                  </Box>
                ) : key === "Workout Plan Status" ? (
                  <Box display={"flex"} alignItems={"end"} gap={1}>
                    <Chip
                      label={value ? "Assigned" : "Not Assigned"}
                      sx={{
                        color: "grey.100",
                        width: 110,
                        backgroundColor: value ? "primary.main" : "error.700",
                      }}
                    />
                    <Link
                      href={{
                        pathname: COACH_SITE?.CLIENTS_ASSIGN_WORKOUT,
                        query: { clientId },
                      }}
                    >
                      <NextIcon />
                    </Link>
                  </Box>
                ) : (
                  value
                )}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
