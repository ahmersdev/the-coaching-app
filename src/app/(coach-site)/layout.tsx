"use client";

import { Box, Grid } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Provider } from "react-redux";
import store from "@/store/store";
import { Header, Navbar } from "@/layouts/coach-site";
import { IChildrenProps } from "@/interfaces";
import AuthGuard from "@/guards/auth-guard";

const CoachLayout = ({ children }: IChildrenProps) => {
  return (
    <main style={{ background: "#23232a", color: "#f9fafb" }}>
      <Provider store={store}>
        <AuthGuard>
          <Grid container>
            <Grid item xs={0} md={2} height={"100vh"} overflow={"hidden"}>
              <Navbar />
            </Grid>
            <Grid item xs={12} md={10} p={2} height={"100vh"} overflow={"auto"}>
              <Header />
              <Box py={2}>{children}</Box>
            </Grid>
          </Grid>
        </AuthGuard>
      </Provider>
    </main>
  );
};

export default CoachLayout;
