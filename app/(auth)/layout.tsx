"use client";

import { SnackbarProvider } from "notistack";
import AuthLayout from "../_layouts/auth";

const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ background: "#0B0B12", color: "#f9fafb" }}>
      <AuthLayout>
        <SnackbarProvider
          preventDuplicate
          maxSnack={3}
          anchorOrigin={{
            horizontal: "center",
            vertical: "top",
          }}
        >
          {children}
        </SnackbarProvider>
      </AuthLayout>
    </main>
  );
};

export default Auth;
