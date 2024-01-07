import { Box } from "@mui/material";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box position={"relative"}>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        bgcolor={"warning.700"}
        width={{ xs: 100, md: 152 }}
        height={{ xs: 100, md: 152 }}
        borderRadius={"50%"}
        sx={{
          opacity: 0.3,
          filter: "blur(90px)",
        }}
        zIndex={0}
      />
      <Box
        position={"absolute"}
        top={0}
        right={0}
        bgcolor={"error.700"}
        width={{ xs: 100, md: 212 }}
        height={{ xs: 100, md: 212 }}
        borderRadius={"50%"}
        sx={{
          opacity: 0.3,
          filter: "blur(100px)",
        }}
        zIndex={0}
      />
      {children}
      <Box
        position={"absolute"}
        bottom={0}
        left={0}
        bgcolor={"primary.main"}
        width={{ xs: 0, md: 332 }}
        height={{ xs: 0, md: 332 }}
        borderRadius={"50%"}
        sx={{
          opacity: 0.3,
          filter: "blur(170px)",
        }}
        zIndex={0}
      />
      <Box
        position={"absolute"}
        bottom={0}
        right={0}
        bgcolor={"warning.700"}
        width={{ xs: 0, md: 282 }}
        height={{ xs: 0, md: 282 }}
        borderRadius={"50%"}
        sx={{
          opacity: 0.3,
          filter: "blur(140px)",
        }}
        zIndex={0}
      />
    </Box>
  );
};

export default AuthLayout;
