import {
  FooterEmailIcon,
  FooterPhoneIcon,
  Logo52Icon,
} from "@/app/_assets/icons";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function LowerFooter() {
  return (
    <>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={12} md={3}>
          <Link href={"/"}>
            <Logo52Icon />
          </Link>
          <Box display={"flex"} gap={1} alignItems={"center"} mt={2}>
            <FooterEmailIcon />
            <Typography variant={"body1"} color={"grey.100"}>
              info@thecoachingapp.com
            </Typography>
          </Box>
          <Box display={"flex"} gap={1} alignItems={"center"} mt={2}>
            <FooterPhoneIcon />
            <Typography variant={"body1"} color={"grey.100"}>
              +1(347)746-6999
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          menu
        </Grid>
        <Grid item xs={12} md={3}>
          links
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: "common.stroke", my: 2, opacity: 0.25 }} />

      <Typography variant={"h6"} fontWeight={"normal"} color={"grey.100"}>
        Copyright All Right Reserved 2023, The Coaching app
      </Typography>
    </>
  );
}
