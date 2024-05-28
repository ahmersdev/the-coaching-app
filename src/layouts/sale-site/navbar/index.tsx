import { Logo52Icon } from "@/assets/icons";
import { Box, Button, List, ListItem, ListItemButton } from "@mui/material";
import Link from "next/link";
import {
  activeLinkStyle,
  listButtonStyles,
  saleSiteHeaderArray,
} from "./navbar.data";
import { AUTH, COACH_SITE, SYSTEM_ADMIN } from "@/constants/routes";
import { pxToRem } from "@/utils/get-font-value";
import { USER_ROLES } from "@/constants/strings";
import useNavbar from "./use-navbar";

export default function Navbar() {
  const { theme, pathName, decryptedValues } = useNavbar();

  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      pt={3}
      px={12}
      bgcolor={"common.black"}
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

        {decryptedValues.user_role === USER_ROLES.COACH ||
        decryptedValues.user_role === USER_ROLES.ADMIN ? (
          <Link
            href={
              decryptedValues.user_role === USER_ROLES.COACH
                ? COACH_SITE.DASHBOARD
                : SYSTEM_ADMIN.DASHBOARD
            }
          >
            <Button
              variant={"contained"}
              sx={{
                color: "grey.100",
                borderRadius: 25,
                border: "1px dashed",
                borderColor: "grey.100",
                background: "transparent",
                height: 54,
                width: 132,
                fontSize: pxToRem(18),
                fontWeight: "normal",
                mr: 2,
                ":hover": {
                  backgroundColor: "grey.100",
                  color: "grey.900",
                },
              }}
              disableElevation
            >
              Dashboard
            </Button>
          </Link>
        ) : (
          <>
            <Link href={AUTH?.SIGN_IN}>
              <Button
                variant={"contained"}
                sx={{
                  color: "grey.100",
                  borderRadius: 25,
                  border: "1px dashed",
                  borderColor: "grey.100",
                  background: "transparent",
                  height: 54,
                  width: 132,
                  fontSize: pxToRem(18),
                  fontWeight: "normal",
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
            <Link href={AUTH?.SIGN_UP}>
              <Button
                variant={"contained"}
                sx={{
                  color: "grey.100",
                  borderRadius: 25,
                  border: "1px solid",
                  borderColor: "primary.main",
                  height: 54,
                  width: 132,
                  fontSize: pxToRem(18),
                  fontWeight: "normal",
                }}
                disableElevation
              >
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </Box>
    </Box>
  );
}
