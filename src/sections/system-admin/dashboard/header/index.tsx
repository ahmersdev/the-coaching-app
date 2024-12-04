import {
  Box,
  Chip,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
  useTheme,
} from "@mui/material";
import { boxStyles, chipStyles } from "./header.styles";

const Header = ({
  data,
  isLoading,
  isFetching,
  isError,
  initialLoading,
  coachCount,
  coachLoading,
  coachFetching,
  coachError,
  clientCount,
  clientLoading,
  clientFetching,
  clientError,
}: any) => {
  const theme: any = useTheme();

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Box display={"flex"} alignItems={"center"}>
        <Typography variant={"h2"}>Hi&nbsp;</Typography>
        {isLoading || isFetching || initialLoading ? (
          <LinearProgress sx={{ width: 50 }} />
        ) : isError ? (
          "---"
        ) : (
          <Typography variant={"h2"}>{data?.coach?.full_name}</Typography>
        )}
        <Typography variant={"h2"}>, Welcome Back!</Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Box sx={{ ...boxStyles(theme) }}>
            <Typography variant={"body1"}>Coaches</Typography>
            {coachLoading || coachFetching ? (
              <CircularProgress size={30} />
            ) : (
              <Chip
                className="chip-hover"
                label={coachError ? 0 : coachCount}
                sx={{ ...chipStyles(theme) }}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ ...boxStyles(theme) }}>
            <Typography variant={"body1"}>Clients</Typography>
            {clientLoading || clientFetching ? (
              <CircularProgress size={30} />
            ) : (
              <Chip
                className="chip-hover"
                label={clientError ? 0 : clientCount}
                sx={{ ...chipStyles(theme) }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
