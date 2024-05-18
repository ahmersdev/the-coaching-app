import { EyeIcon } from "@/assets/icons";
import { SYSTEM_ADMIN } from "@/constants/routes";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";

const Coaches = ({ coachesArray }: any) => {
  const theme: any = useTheme();

  return (
    <Box bgcolor={"secondary.main"} borderRadius={"18px"} padding={"24px 22px"}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant={"h5"} fontWeight={700}>
          New Coaches Registered
        </Typography>

        <Link href={SYSTEM_ADMIN?.COACHES}>
          <Button
            variant={"contained"}
            sx={{
              color: "primary.main",
              borderRadius: 25,
              border: "1px solid",
              borderColor: "primary.100",
              background: theme?.palette?.gradients?.button1,
              ":hover": {
                background: theme?.palette?.gradients?.button1Hover,
              },
            }}
            disableElevation
          >
            View All
          </Button>
        </Link>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        {!coachesArray?.length ? (
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant={"h6"}>Nothing in the List</Typography>
          </Grid>
        ) : (
          coachesArray?.map((item: any) => (
            <Grid item xs={12} sm={6} md={4} key={item?.id}>
              <Box
                bgcolor={"secondary.900"}
                borderRadius={4}
                padding={1.6}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                sx={{
                  ":hover": {
                    boxShadow: theme?.CustomShadows?.()?.primary,
                  },
                }}
                height={"100%"}
              >
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Avatar src={item?.src} sx={{ width: 44, height: 44 }} />
                  <Box>
                    <Typography variant={"h6"} fontWeight={600}>
                      {item?.title}
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
                <Link
                  href={{
                    pathname: SYSTEM_ADMIN?.COACHES_OVERVIEW,
                    query: { coachId: item?.id },
                  }}
                >
                  <EyeIcon />
                </Link>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Coaches;
