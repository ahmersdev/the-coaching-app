import { LogoIcon } from "@/app/_assets";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { mainRoutesArray, mainStyles } from "./drawer-navbar.data";
import { usePathname } from "next/navigation";

const DrawerNavbar = ({ open = false, setOpen }: any) => {
  const theme: any = useTheme();
  const pathName = usePathname();

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
        <Link href={"/"}>
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
                      item?.href === pathName
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
    </Drawer>
  );
};

export default DrawerNavbar;
