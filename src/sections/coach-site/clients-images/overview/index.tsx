"use client";

import { ArrowBackIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ImagesOverviewData } from "./overview.data";
import dayjs from "dayjs";
import { useState } from "react";
import DetailsDialog from "./details-dialog";

export default function Overview() {
  const theme: any = useTheme();

  const [showDetails, setShowDetails] = useState(false);
  const [details, setDetails] = useState();

  return (
    <>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Link href={COACH_SITE?.CLIENTS_IMAGES}>
          <ArrowBackIcon />
        </Link>
        <Typography variant={"h3"} fontWeight={600}>
          Complete Progress
        </Typography>
      </Box>

      <Grid container spacing={2} mt={2}>
        {ImagesOverviewData?.map((item: any) => (
          <Grid item key={item?.id}>
            <Box
              borderRadius={3}
              bgcolor={"secondary.900"}
              boxShadow={theme?.CustomShadows?.()?.secondary}
              sx={{ cursor: "pointer" }}
              pb={1}
              onClick={() => {
                setShowDetails(true);
                setDetails(item);
              }}
            >
              <Image
                src={item?.img}
                width={212}
                height={198}
                alt={item?.name}
              />
              <Typography variant={"h6"} fontWeight={700} mx={1} mt={1}>
                {dayjs(item?.uploadDate)?.format("MMM DD, YYYY")}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {showDetails && (
        <DetailsDialog
          details={details}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      )}
    </>
  );
}
