import { ShortLogoIcon } from "@/assets/icons";
import { Box } from "@mui/material";
import Image from "next/image";

export default function Loading() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      bgcolor={"#0B0B12"}
    >
      <Box
        position={"absolute"}
        top={0}
        left={0}
        bgcolor={"warning.700"}
        width={152}
        height={152}
        borderRadius={"50%"}
        sx={{ opacity: 0.3, filter: "blur(90px)" }}
      />
      <Box
        position={"absolute"}
        top={0}
        right={0}
        bgcolor={"error.700"}
        width={212}
        height={212}
        borderRadius={"50%"}
        sx={{ opacity: 0.3, filter: "blur(100px)" }}
      />
      <Box
        position={"absolute"}
        bottom={0}
        left={0}
        bgcolor={"primary.main"}
        width={332}
        height={332}
        borderRadius={"50%"}
        sx={{ opacity: 0.3, filter: "blur(170px)" }}
      />
      <Box
        position={"absolute"}
        bottom={0}
        right={0}
        bgcolor={"warning.700"}
        width={282}
        height={282}
        borderRadius={"50%"}
        sx={{ opacity: 0.3, filter: "blur(140px)" }}
      />
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={4}
      >
        <ShortLogoIcon />
        <Image
          src={"/loading-gif.gif"}
          alt={"The Coaching App"}
          width={132}
          height={24}
          unoptimized
          priority
        />
      </Box>
    </Box>
  );
}
