"use client";

import { Provider } from "react-redux";
import store from "@/store/store";
import AuthLayout from "@/layouts/auth";
import AuthGuard from "@/guards/auth-guard";
import { IChildrenInterface } from "@/interfaces";

const Auth = ({ children }: IChildrenInterface) => {
  return (
    <main style={{ background: "#0B0B12", color: "#f9fafb" }}>
      <Provider store={store}>
        {/* <AuthGuard> */}
        <AuthLayout>{children}</AuthLayout>
        {/* </AuthGuard> */}
      </Provider>
    </main>
  );
};

export default Auth;
