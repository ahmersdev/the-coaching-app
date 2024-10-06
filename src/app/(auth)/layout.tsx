"use client";

import { Provider } from "react-redux";
import store from "@/store/store";
import AuthLayout from "@/layouts/auth";
import { IChildrenProps } from "@/interfaces";
import GuestGuard from "@/guards/guest-guard";

const Auth = ({ children }: IChildrenProps) => {
  return (
    <main style={{ background: "#0B0B12", color: "#f9fafb" }}>
      <Provider store={store}>
        <GuestGuard>
          <AuthLayout>{children}</AuthLayout>
        </GuestGuard>
      </Provider>
    </main>
  );
};

export default Auth;
