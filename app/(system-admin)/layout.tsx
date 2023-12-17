"use client";

import React from "react";
import Navbar from "../_layouts/main-layout/navbar";
import { Box, Grid } from "@mui/material";
import Header from "../_layouts/main-layout/header";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Box width={"200vw"} bgcolor={"red"}>
        test
      </Box>
      <Grid container>
        <Grid item xs={2}>
          <Navbar />
        </Grid>
        <Grid item xs={10} p={2}>
          <Header />
          <Box py={2}>{children}</Box>
        </Grid>
      </Grid>
    </main>
  );
};

export default AdminLayout;
