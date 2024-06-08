import { NotificationIcon } from "@/assets/icons";
import {
  Avatar,
  Badge,
  Box,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { StyledBadge, headerTitle } from "./header.data";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerNavbar from "../drawer-navbar";
import { getInitials } from "@/utils/avatar";
import useHeader from "./use-header";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const { open, setOpen, pathName, isLoading, isFetching, isError, data } =
    useHeader();

  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"secondary.main"}
        borderRadius={2}
        p={{ xs: 1, md: "12px 24px" }}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <MenuIcon
            sx={{
              cursor: "pointer",
              color: "grey.100",
              display: { xs: "block", md: "none" },
            }}
            onClick={() => setOpen(true)}
          />
          <Typography variant={"h3"} color={"grey.100"}>
            {headerTitle(pathName)}
          </Typography>
        </Box>
        <Box>
          <Stack direction="row" spacing={2}>
            <Badge
              badgeContent={"06"}
              sx={{
                ".MuiBadge-badge": {
                  backgroundColor: "error.300",
                  color: "error.700",
                  width: 16,
                  fontWeight: 500,
                  fontSize: 8,
                  top: 5,
                  right: 3,
                },
              }}
            >
              <NotificationIcon />
            </Badge>

            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              {isLoading || isFetching ? (
                <CircularProgress size={38} />
              ) : (
                <Avatar
                  alt={"Profile"}
                  sx={{
                    width: 38,
                    height: 38,
                    bgcolor: "info.main",
                  }}
                  src={data?.coach?.profile_picture ?? ""}
                >
                  {isError ? (
                    <PersonIcon sx={{ fontSize: 20 }} />
                  ) : (
                    <Typography variant="body2">
                      {getInitials(data?.coach?.full_name)}
                    </Typography>
                  )}
                </Avatar>
              )}
            </StyledBadge>
          </Stack>
        </Box>
      </Box>

      {open && <DrawerNavbar setOpen={setOpen} open={open} />}
    </>
  );
};

export default Header;
