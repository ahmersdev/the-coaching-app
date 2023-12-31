import { Box } from "@mui/material";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box position={"relative"}>
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
      {children}
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
    </Box>
  );
};

export default AuthLayout;
