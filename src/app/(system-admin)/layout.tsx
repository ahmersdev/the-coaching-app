"use client";

import { Header, Navbar } from "@/layouts/admin-site";
import store from "@/store/store";
import { Box, Grid } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ background: "#23232a", color: "#f9fafb" }}>
      <Provider store={store}>
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
      </Provider>
    </main>
  );
};

export default AdminLayout;