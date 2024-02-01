"use client";

import { Box, Grid } from "@mui/material";
import { SnackbarProvider } from "notistack";
import Navbar from "../_layouts/coach-site/navbar";
import Header from "../_layouts/coach-site/header";

const CoachLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ background: "#23232a", color: "#f9fafb" }}>
      <SnackbarProvider
        preventDuplicate
        maxSnack={3}
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      >
        <Grid container>
          <Grid item xs={0} md={2} height={"100vh"} overflow={"hidden"}>
            <Navbar />
          </Grid>
          <Grid item xs={12} md={10} p={2} height={"100vh"} overflow={"auto"}>
            <Header />
            <Box py={2}>{children}</Box>
          </Grid>
        </Grid>
      </SnackbarProvider>
    </main>
  );
};

export default CoachLayout;
