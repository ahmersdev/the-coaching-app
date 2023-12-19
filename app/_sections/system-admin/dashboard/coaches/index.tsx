import { EyeIcon } from "@/app/_assets";
import { SYSTEM_ADMIN } from "@/app/_constants/routes";
import typography from "@/app/_theme/typography";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

const Coaches = ({ coachesArray }: any) => {
  const router = useRouter();
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

        <Button
          variant={"contained"}
          sx={{
            color: "primary.main",
            textTransform: "capitalize",
            ":hover": {
              background:
                "linear-gradient(0deg, #E1D4F8, #E1D4F8), linear-gradient(0deg, #D2BEF4, #D2BEF4) !important",
            },
          }}
          style={typography?.button1}
          onClick={() => router?.push(SYSTEM_ADMIN?.COACHES)}
        >
          View All
        </Button>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={2}>
        {!coachesArray?.length ? (
          <Grid item xs={12} textAlign={"center"}>
            <Typography variant={"h6"}>Nothing in the List</Typography>
          </Grid>
        ) : (
          coachesArray?.map((item: any) => (
            <Grid item xs={12} md={4} key={item?.id}>
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
              >
                <Box display={"flex"} gap={2}>
                  <Avatar src={item?.src} sx={{ width: 44, height: 44 }} />
                  <Box>
                    <Typography variant={"h6"} fontWeight={600}>
                      {item?.title}
                    </Typography>
                    <Typography variant={"body1"} fontWeight={600}>
                      @{item?.username}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ cursor: "pointer" }}>
                  <EyeIcon />
                </Box>
              </Box>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default Coaches;
