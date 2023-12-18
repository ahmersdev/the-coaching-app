import { LogoIcon } from "@/app/_assets";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { bottomRoutesArray, mainRoutesArray } from "./navbar.data";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  const theme: any = useTheme();

  return (
    <Box height={"100%"} bgcolor={"secondary.main"} p={2}>
      <Link href={"/"}>
        <LogoIcon />
      </Link>

      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"96%"}
      >
        <List>
          {mainRoutesArray?.map((item: any) => (
            <ListItem key={item?.id}>
              <Link href={item?.href}>
                <ListItemButton
                  sx={{
                    background: `${
                      item?.href === pathName
                        ? theme?.palette?.gradients?.primary
                        : null
                    }`,
                    color: `${
                      item?.href === pathName
                        ? theme?.palette?.grey?.[100]
                        : theme?.palette?.secondary?.lighter
                    }`,
                    fontSize: "16px",
                    borderRadius: "6px 200px 200px 6px",
                    "&:hover": {
                      background: `${
                        item?.href === pathName
                          ? theme?.palette?.gradients?.primary
                          : theme?.palette?.gradients?.secondary
                      }`,
                    },
                  }}
                >
                  <ListItemIcon>
                    <item.icon
                      fill={
                        item?.href === pathName
                          ? theme?.palette?.grey?.[100]
                          : theme?.palette?.secondary?.lighter
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
          {bottomRoutesArray?.map((item: any) => (
            <ListItem key={item?.id}>
              <Link href={item?.href}>
                <ListItemButton
                  sx={{
                    background: `${
                      item?.href === pathName
                        ? theme?.palette?.gradients?.primary
                        : null
                    }`,
                    borderRadius: "6px 200px 200px 6px",
                    "&:hover": {
                      background: `${
                        item?.href === pathName
                          ? theme?.palette?.gradients?.primary
                          : theme?.palette?.gradients?.secondary
                      }`,
                    },
                  }}
                >
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  {item?.label}
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Navbar;
