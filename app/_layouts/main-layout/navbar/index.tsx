import { LogoIcon } from "@/app/_assets";
import { Box } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box height={"100vh"} bgcolor={"secondary.main"} p={2}>
      <Link href={"/"}>
        <LogoIcon />
      </Link>
    </Box>
  );
};

export default Navbar;
