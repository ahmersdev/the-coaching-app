import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/theme";
import Loader from "@/components/loader";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Coaching App",
  description: "The Coaching App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={mulish.className}
        style={{ background: "#0B0B12", color: "#f9fafb" }}
      >
        <ThemeProvider>
          <Loader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
