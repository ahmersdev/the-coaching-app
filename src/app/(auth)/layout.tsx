"use client";

import { Provider } from "react-redux";
import store from "@/store/store";
import AuthLayout from "@/layouts/auth";

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ background: "#0B0B12", color: "#f9fafb" }}>
      <Provider store={store}>
        <AuthLayout>{children}</AuthLayout>
      </Provider>
    </main>
  );
};

export default Auth;
