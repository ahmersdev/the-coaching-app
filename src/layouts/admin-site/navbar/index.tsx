import { LogoIcon, SettingsIcon, SignOutIcon } from "@/assets/icons";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import Link from "next/link";
import { mainRoutesArray, mainStyles } from "./navbar.data";
import useNavbar from "./use-navbar";

const Navbar = () => {
  const { pathName, theme, handleLogout } = useNavbar();

  return (
    <Box
      height={"100%"}
      bgcolor={"secondary.main"}
      p={{ md: 1, lg: 2 }}
      display={{ xs: "none", md: "block" }}
    >
      <Link href={"/"} style={{ display: "flex", justifyContent: "center" }}>
        <LogoIcon />
      </Link>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"96%"}
        pt={2}
      >
        <List>
          {mainRoutesArray?.map((item: any) => (
            <ListItem key={item?.id} sx={{ px: 0 }}>
              <Link href={item?.href} style={{ width: "100%" }}>
                <ListItemButton sx={mainStyles(item?.href, pathName, theme)}>
                  <ListItemIcon sx={{ minWidth: { xs: "30px", lg: "40px" } }}>
                    <item.icon
                      fill={
                        pathName?.includes(item?.href)
                          ? theme?.palette?.grey?.[100]
                          : theme?.palette?.secondary?.[400]
                      }
                    />
                  </ListItemIcon>
                  {item?.label}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>

        <List>
          <ListItem sx={{ px: 0 }}>
            <Link href={"/admin-settings"} style={{ width: "100%" }}>
              <ListItemButton
                sx={mainStyles("/admin-settings", pathName, theme)}
              >
                <ListItemIcon sx={{ minWidth: { xs: "30px", lg: "40px" } }}>
                  <SettingsIcon
                    fill={
                      "/admin-settings" === pathName
                        ? theme?.palette?.grey?.[100]
                        : theme?.palette?.secondary?.[400]
                    }
                  />
                </ListItemIcon>
                Settings
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem sx={{ px: 0 }}>
            <ListItemButton
              sx={mainStyles("/sign-in", pathName, theme)}
              onClick={handleLogout}
            >
              <ListItemIcon sx={{ minWidth: { xs: "30px", lg: "40px" } }}>
                <SignOutIcon fill={theme?.palette?.secondary?.[400]} />
              </ListItemIcon>
              Sign Out
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Navbar;
