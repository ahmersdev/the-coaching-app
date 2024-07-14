import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/theme";
import Loader from "@/components/loader";
import SnackbarProviderGlobal from "@/providers/snackbar";
import { IChildrenProps } from "@/interfaces";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Coaching App",
  description: "The Coaching App",
};

export default function RootLayout({ children }: IChildrenProps) {
  return (
    <html lang="en">
      <body
        className={mulish.className}
        style={{ background: "#23232a", color: "#f9fafb" }}
      >
        <ThemeProvider>
          <SnackbarProviderGlobal>
            <Loader />
            {children}
          </SnackbarProviderGlobal>
        </ThemeProvider>
      </body>
    </html>
  );
}
