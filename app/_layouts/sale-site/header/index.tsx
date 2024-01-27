import { Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DrawerSaleSite from "../drawer";
import { headerTitle } from "./header.data";

export default function Header() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Box p={{ xs: 2, md: 0 }} bgcolor={"common.black"}>
      <Box
        display={{ xs: "flex", md: "none" }}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"secondary.900"}
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
      </Box>

      {open && <DrawerSaleSite setOpen={setOpen} open={open} />}
    </Box>
  );
}
