"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Provider } from "react-redux";
import store from "@/store/store";
import { Footer, Header, Navbar } from "@/layouts/sale-site";

const SaleSiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ background: "#0B0B12", color: "#f9fafb" }}>
      <Provider store={store}>
        <Navbar />
        <Header />
        {children}
        <Footer />
      </Provider>
    </main>
  );
};

export default SaleSiteLayout;
