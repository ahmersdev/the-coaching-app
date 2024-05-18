import {
  FooterEmailIcon,
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterLinkedinIcon,
  FooterPhoneIcon,
  FooterXIcon,
  FooterYoutubeIcon,
  Logo52Icon,
} from "@/assets/icons";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import {
  activeLinkStyle,
  listButtonStyles,
  saleSiteFooterArray,
} from "./lower-footer.data";
import { usePathname } from "next/navigation";

export default function LowerFooter() {
  const pathName = usePathname();
  const theme: any = useTheme();

  return (
    <>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid
          item
          xs={12}
          md={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ xs: "center", md: "unset" }}
        >
          <Link href={"/"}>
            <Logo52Icon />
          </Link>
          <Box display={"flex"} gap={1} alignItems={"center"} mt={2}>
            <FooterEmailIcon />
            <Typography variant={"body1"} color={"grey.100"}>
              info@thecoachingapp.com
            </Typography>
          </Box>
          <Box display={"flex"} gap={1} alignItems={"center"} mt={2}>
            <FooterPhoneIcon />
            <Typography variant={"body1"} color={"grey.100"}>
              +1(347)746-6999
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}>
          <List sx={{ display: { xs: "block", md: "flex" } }}>
            {saleSiteFooterArray?.map((item: any) => (
              <ListItem key={item?.id} sx={{ px: 0, width: "max-content" }}>
                <Link href={item?.href} style={{ width: "max-content" }}>
                  <ListItemButton sx={listButtonStyles(item?.href, pathName)}>
                    {item?.label}
                  </ListItemButton>
                  {item?.href === pathName && (
                    <Box sx={activeLinkStyle(theme)} />
                  )}
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          display={"flex"}
          flexDirection={"column"}
          alignItems={{ xs: "center", md: "unset" }}
        >
          <Typography variant={"h4"} fontWeight={800} color={"grey.100"}>
            Follow Us On:
          </Typography>

          <Box display={"flex"} alignItems={"center"} gap={3} mt={1}>
            <Link href={"#"}>
              <FooterInstagramIcon />
            </Link>
            <Link href={"#"}>
              <FooterLinkedinIcon />
            </Link>
            <Link href={"#"}>
              <FooterXIcon />
            </Link>
            <Link href={"#"}>
              <FooterFacebookIcon />
            </Link>
            <Link href={"#"}>
              <FooterYoutubeIcon />
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ borderColor: "common.stroke", my: 2, opacity: 0.25 }} />

      <Typography
        variant={"h6"}
        fontWeight={"normal"}
        color={"grey.100"}
        textAlign={{ xs: "center", md: "unset" }}
      >
        Copyright All Right Reserved 2023, The Coaching app.
      </Typography>
    </>
  );
}
