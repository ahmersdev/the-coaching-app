import { NotificationIcon } from "@/assets/icons";
import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { StyledBadge, headerTitle } from "./header.data";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerNavbar from "../drawer-navbar";

const Header = () => {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);

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
              <Avatar
                alt="Profile"
                src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg"
                sx={{ width: 38, height: 38 }}
              />
            </StyledBadge>
          </Stack>
        </Box>
      </Box>

      {open && <DrawerNavbar setOpen={setOpen} open={open} />}
    </>
  );
};

export default Header;
