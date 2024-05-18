"use client";

import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { AllClientsImagesData, HeaderDataArray } from "./clients-images.data";
import Link from "next/link";
import { COACH_SITE } from "@/constants/routes";
import Image from "next/image";
import { NextIcon } from "@/assets/icons";
import dayjs from "dayjs";

export default function ClientsImages() {
  const theme: any = useTheme();

  return (
    <>
      <Typography variant={"h3"} mb={2}>
        Recently Uploaded Progress By Clients
      </Typography>

      <Grid container spacing={2}>
        {HeaderDataArray?.map((item: any) => (
          <Grid item xs={12} sm={6} md={3} key={item?.id}>
            <Box bgcolor={"secondary.main"} p={2} borderRadius={3}>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                <Avatar src={item?.src} sx={{ width: 44, height: 44 }} />
                <Box color={"grey.100"}>
                  <Typography variant={"h6"} fontWeight={600}>
                    {item?.name}
                  </Typography>
                  <Typography
                    variant={"body1"}
                    fontWeight={600}
                    color={"grey.400"}
                  >
                    @{item?.username}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Link
                href={{
                  pathname: COACH_SITE?.CLIENTS_IMAGES_OVERVIEW,
                  query: { clientId: item?.id },
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
                  Progress Images
                </Button>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant={"h3"} my={2}>
        Progress By All Clients
      </Typography>

      <Grid container spacing={2}>
        {AllClientsImagesData?.map((item: any) => (
          <Grid item key={item?.id}>
            <Box
              borderRadius={3}
              bgcolor={"secondary.900"}
              boxShadow={theme?.CustomShadows?.()?.secondary}
            >
              <Image
                src={item?.img}
                width={212}
                height={198}
                alt={item?.name}
              />
              <Box p={1}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  mb={1}
                >
                  <Typography variant={"h6"} fontWeight={700}>
                    {dayjs(item?.uploadDate)?.format("MMM DD, YYYY")}
                  </Typography>
                  <Link
                    href={{
                      pathname: COACH_SITE?.CLIENTS_IMAGES_OVERVIEW,
                      query: { clientId: item?.id },
                    }}
                  >
                    <NextIcon />
                  </Link>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <Avatar src={item?.src} sx={{ width: 44, height: 44 }} />
                  <Box color={"grey.100"}>
                    <Typography variant={"h6"} fontWeight={600}>
                      {item?.name}
                    </Typography>
                    <Typography
                      variant={"body1"}
                      fontWeight={600}
                      color={"grey.400"}
                    >
                      @{item?.username}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
