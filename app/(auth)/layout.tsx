"use client";

import { Box } from "@mui/material";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ background: "#0B0B12", color: "#f9fafb" }}>
      <Box p={2}>{children}</Box>
    </main>
  );
};

export default AuthLayout;
