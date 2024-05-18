import TanstackTable from "@/components/table";
import { Box, Chip, Grid, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { paymentsColumns, paymentsDataArray } from "./payments.data";

const Payments = () => {
  const [hoverState, setHoverState] = useState(false);

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
            onMouseEnter={() => {
              setHoverState(true);
            }}
            onMouseLeave={() => {
              setHoverState(false);
            }}
            sx={{
              ":hover": {
                boxShadow: theme?.CustomShadows?.()?.primary,
              },
            }}
          >
            <Typography variant={"body1"} color={"grey.100"}>
              Total Revenue
            </Typography>
            <Chip
              label={"$4.8k"}
              sx={{
                width: "132px",
                height: "49px",
                bgcolor: hoverState
                  ? theme?.palette?.primary?.main
                  : theme?.palette?.secondary?.[900],
                borderRadius: "200px",
                color: `${theme?.palette?.grey?.[400]}`,
                fontWeight: 600,
                fontSize: "24px",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography variant={"h6"} fontWeight={700} color={"grey.100"}>
            Recent Payments
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TanstackTable
            data={paymentsDataArray}
            columns={paymentsColumns}
            isPagination
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Payments;
