import { Logo52Icon } from "@/app/_assets";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import {
  activeLinkStyle,
  listButtonStyles,
  saleSiteHeaderArray,
} from "./navbar.data";
import { usePathname } from "next/navigation";
import { AUTH } from "@/app/_constants/routes";

export default function Navbar() {
  const pathName = usePathname();
  const theme: any = useTheme();

  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      py={3}
      px={12}
    >
      <Link href={"/"}>
        <Logo52Icon />
      </Link>

      <Box display={"flex"} alignItems={"center"}>
        <List sx={{ display: "flex", whiteSpace: "nowrap" }}>
          {saleSiteHeaderArray?.map((item: any) => (
            <ListItem key={item?.id} sx={{ px: 0 }}>
              <Link href={item?.href} style={{ width: "100%" }}>
                <ListItemButton sx={listButtonStyles(item?.href, pathName)}>
                  {item?.label}
                </ListItemButton>
                {item?.href === pathName && <Box sx={activeLinkStyle(theme)} />}
              </Link>
            </ListItem>
          ))}
        </List>

        <Link href={AUTH?.SIGN_IN}>
          <Button
            variant={"contained"}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              border: "1px dashed",
              borderColor: "grey.100",
              background: "transparent",
              mr: 2,
              ":hover": {
                backgroundColor: "grey.100",
                color: "grey.900",
              },
            }}
            disableElevation
          >
            Sign In
          </Button>
        </Link>
        <Link href={AUTH?.SIGN_IN}>
          <Button
            variant={"contained"}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              border: "1px solid",
              borderColor: "primary.main",
            }}
            disableElevation
          >
            Sign Up
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
