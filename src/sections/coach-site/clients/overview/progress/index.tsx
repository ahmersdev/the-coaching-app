import { NextIcon, ProgressIcon } from "@/assets/icons";
import ClientDetailsDialog from "@/components/client-details-dialog";
import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";

export default function Progress({ checkInDetails }: any) {
  const theme: any = useTheme();

  const [showDetails, setShowDetails] = useState({
    open: false,
    details: null,
  });

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
        {checkInDetails?.map((item: any) => (
          <Grid item key={item?.details_id}>
            <Box
              borderRadius={3}
              bgcolor={"secondary.900"}
              boxShadow={theme?.CustomShadows?.()?.secondary}
              overflow={"hidden"}
            >
              <Image
                src={item?.check_in_pictures?.[0]?.picture}
                width={212}
                height={198}
                alt={item?.name}
                style={{ width: "100%", height: "100%" }}
              />
              <Box
                p={1}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant={"h6"} fontWeight={700} mb={1}>
                  {dayjs(item?.updated_at)?.format("MMM DD, YYYY")}
                </Typography>

                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => setShowDetails({ open: true, details: item })}
                >
                  <NextIcon />
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {showDetails?.open && (
        <ClientDetailsDialog
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      )}
    </Box>
  );
}
