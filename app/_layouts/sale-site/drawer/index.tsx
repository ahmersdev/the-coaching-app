import { Logo52Icon, LogoIcon } from "@/app/_assets";
import { Box, Drawer, useTheme } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function DrawerSaleSite() {
  const [open, setOpen] = useState(false);
  const theme: any = useTheme();

  return (
    <>
      <Box
        display={{ xs: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={2}
      >
        <Link href={"/"}>
          <Logo52Icon />
        </Link>

        <MenuIcon
          sx={{
            cursor: "pointer",
            color: "grey.100",
            display: { xs: "block", md: "none" },
          }}
          onClick={() => setOpen(true)}
        />
      </Box>

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
      </Drawer>
    </>
  );
}
