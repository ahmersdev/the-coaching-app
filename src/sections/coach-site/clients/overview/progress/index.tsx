import { NextIcon, ProgressIcon } from "@/assets/icons";
import { HomeTrainersOneImg } from "@/assets/images";
import { COACH_SITE } from "@/constants/routes";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Progress({ clientId }: any) {
  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"center"} gap={1} mb={2}>
        <ProgressIcon />
        <Typography variant={"h6"} fontWeight={700}>
          Body Details
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        <Grid item>
          <Box borderRadius={3} bgcolor={"secondary.900"}>
            <Image
              src={HomeTrainersOneImg}
              width={198}
              height={198}
              alt={"img"}
            />
            <Box
              p={1}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant={"h6"} fontWeight={700}>
                Dec 27, 2023
              </Typography>
              <Link
                href={{
                  pathname: COACH_SITE?.CLIENTS_ASSIGN_DIET,
                  query: { clientId },
                }}
              >
                <NextIcon />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
