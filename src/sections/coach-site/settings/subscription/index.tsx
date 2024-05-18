import TanstackTable from "@/components/table";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import {
  subscriptionColumns,
  subscriptionDataArray,
} from "./subscription.data";

export default function Subscription() {
  const theme: any = useTheme();

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box
            borderRadius={6}
            border={"0px 0px 0px 6px"}
            padding={"24px 16px"}
            borderLeft={`6px solid ${theme?.palette?.primary?.main}`}
            bgcolor={"secondary.main"}
            height={"97px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{
              ":hover": {
                boxShadow: theme?.CustomShadows?.()?.primary,
              },
            }}
          >
            <Typography variant={"body1"} color={"grey.100"}>
              Renew Subscription in
              <br />
              Just One Click
            </Typography>

            <Button
              variant={"contained"}
              sx={{
                color: "grey.100",
                borderRadius: 25,
                border: "1px solid",
                borderColor: "primary.main",
                height: 36,
                fontWeight: "normal",
              }}
              disableElevation
            >
              Renew Subscription
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant={"h6"} fontWeight={700} color={"grey.100"}>
            Recent Subscription
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TanstackTable
            data={subscriptionDataArray}
            columns={subscriptionColumns}
            isPagination
          />
        </Grid>
      </Grid>
    </>
  );
}
