"use client";

import { IChildrenProps } from "@/interfaces";
import { SnackbarProvider } from "notistack";

export default function SnackbarProviderGlobal({ children }: IChildrenProps) {
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
