import { TwoPersonIcon } from "@/assets/icons";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import dayjs from "dayjs";

export default function ClientDetails({ clientDetailsData }: any) {
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
        {clientDetailsData?.map((item: any, index: any) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box borderRight={1} borderColor={"grey.800"}>
              <Typography variant={"body1"} fontWeight={500} color={"grey.400"}>
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

        <Grid item xs={12}>
          <Button
            variant={"contained"}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              border: "1px solid",
              borderColor: "primary.main",
              mr: 2,
            }}
            disableElevation
          >
            Accept
          </Button>
          <Button
            variant={"contained"}
            sx={{
              color: "error.700",
              borderRadius: 25,
              border: "1px dashed",
              borderColor: "error.700",
              background: "transparent",
              ":hover": {
                backgroundColor: "error.700",
                color: "grey.100",
              },
            }}
            disableElevation
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
