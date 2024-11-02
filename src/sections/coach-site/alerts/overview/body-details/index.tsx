import { TwoPersonIcon } from "@/assets/icons";
import { Box, Divider, Grid, Typography } from "@mui/material";

export default function BodyDetails({ bodyDetailsData }: any) {
  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
        <TwoPersonIcon />
        <Typography variant={"h6"} fontWeight={700}>
          Body Details
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        {Object.entries(bodyDetailsData).map(([key, value]: any) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
            <Box borderRight={1} borderColor={"grey.800"}>
              <Typography variant={"body1"} fontWeight={500} color={"grey.400"}>
                {key}:
              </Typography>
              <Typography variant={"h6"} color={"grey.100"} mt={0.5}>
                {value}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
