import { LogoIcon, SignOutIcon } from "@/assets/icons";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { mainRoutesArray, mainStyles } from "./drawer-navbar.data";
import useDrawerNavbar from "./use-drawer-navbar";

const DrawerNavbar = ({ open = false, setOpen }: any) => {
  const { pathName, theme, handleLogout } = useDrawerNavbar();

  return (
    <Drawer
      anchor={"left"}
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        style: {
          width: "280px",
          backgroundColor: `${theme?.palette?.secondary?.main}`,
          padding: "20px",
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link href={"/"} onClick={() => setOpen(false)}>
          <LogoIcon />
        </Link>
        <CloseIcon
          sx={{ cursor: "pointer", color: "secondary.100" }}
          onClick={() => setOpen(false)}
        />
      </Box>
      <List>
        {mainRoutesArray?.map((item: any) => (
          <ListItem key={item?.id} sx={{ px: 0 }}>
            <Link
              href={item?.href}
              style={{ width: "100%" }}
              onClick={() => setOpen(false)}
            >
              <ListItemButton sx={mainStyles(item?.href, pathName, theme)}>
                <ListItemIcon sx={{ minWidth: "40px" }}>
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
    </Drawer>
  );
};

export default DrawerNavbar;
