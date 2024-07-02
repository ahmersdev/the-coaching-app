import { Box } from "@mui/material";

const StripeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box position={"relative"}>
      <Box
        position={"absolute"}
        top={0}
        left={0}
        bgcolor={"warning.700"}
        width={150}
        height={150}
        borderRadius={"50%"}
        sx={{
          opacity: 0.3,
          filter: "blur(90px)",
        }}
      />
      <Box
        position={"absolute"}
        top={0}
        right={0}
        bgcolor={"error.700"}
        width={200}
        height={200}
        borderRadius={"50%"}
        sx={{
          opacity: 0.3,
          filter: "blur(110px)",
        }}
      />
      <Box
        position={"absolute"}
        bottom={0}
        left={0}
        bgcolor={"primary.main"}
        width={300}
        height={300}
        borderRadius={"50%"}
        sx={{
          opacity: 0.3,
          filter: "blur(200px)",
        }}
      />
      <Box
        position={"absolute"}
        bottom={0}
        right={0}
        bgcolor={"warning.700"}
        width={250}
        height={250}
        borderRadius={"50%"}
        sx={{
          opacity: 0.3,
          filter: "blur(130px)",
        }}
      />
      {children}
    </Box>
  );
};

export default StripeLayout;
