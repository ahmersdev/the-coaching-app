import {
  Box,
  Chip,
  CircularProgress,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import useHeader from "./use-header";

const Header = ({
  clientCount,
  loadingNewClient,
  fetchingNewClient,
  errorNewClient,
}: any) => {
  const {
    theme,
    hoverStates,
    setHoverStates,
    initialLoading,
    data,
    isLoading,
    isFetching,
    isError,
  } = useHeader();

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      {isLoading || isFetching || initialLoading ? (
        <Skeleton
          height={50}
          sx={{
            width: { xs: "100%", md: "50%" },
            bgcolor: "grey.700",
            border: 1,
            borderColor: "grey.700",
          }}
        />
      ) : (
        <Typography variant={"h2"} textTransform={"capitalize"}>
          Hi {isError ? "-" : data?.coach?.full_name}, Welcome Back!
        </Typography>
      )}

      {loadingNewClient || fetchingNewClient ? (
        <Box
          bgcolor={"secondary.main"}
          height={"97px"}
          width={{ xs: "100%", md: "40%" }}
          borderRadius={6}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress />
        </Box>
      ) : errorNewClient ? null : (
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
                setHoverStates(true);
              }}
              onMouseLeave={() => {
                setHoverStates(false);
              }}
              sx={{
                ":hover": {
                  boxShadow: theme?.CustomShadows?.()?.primary,
                },
              }}
            >
              <Typography variant={"body1"}>Clients</Typography>
              <Chip
                label={clientCount}
                sx={{
                  width: "132px",
                  height: "49px",
                  bgcolor: hoverStates
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
        </Grid>
      )}
    </Box>
  );
};

export default Header;
