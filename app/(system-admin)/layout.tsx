"use client";

import React from "react";
import Navbar from "../_layouts/main-layout/navbar";
import { Box, Grid } from "@mui/material";
import Header from "../_layouts/main-layout/header";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Grid container>
        <Grid item xs={0} md={2} height={"100vh"} overflow={"hidden"}>
          <Navbar />
        </Grid>
        <Grid item xs={12} md={10} p={2} height={"100vh"} overflow={"auto"}>
          <Header />
          <Box py={2}>{children}</Box>
        </Grid>
      </Grid>
    </main>
  );
};

export default AdminLayout;
