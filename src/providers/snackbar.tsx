"use client";

import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";

export default function SnackbarProviderGlobal({
  children,
}: {
  children: ReactNode;
}) {
  return (
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
  );
}
