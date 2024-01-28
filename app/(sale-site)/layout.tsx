"use client";

import { SnackbarProvider } from "notistack";
import Navbar from "../_layouts/sale-site/navbar";
import Header from "../_layouts/sale-site/header";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SaleSiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ background: "#0B0B12", color: "#f9fafb" }}>
      <SnackbarProvider
        preventDuplicate
        maxSnack={3}
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      >
        <Navbar />
        <Header />
        {children}
      </SnackbarProvider>
    </main>
  );
};

export default SaleSiteLayout;
