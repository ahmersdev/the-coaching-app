"use client";

import { getTokenFromCookies } from "@/utils/auth";
import { AdminGuardProps } from "./guards.type";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AUTH } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";

export default function AdminGuard({ children }: AdminGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const encryptedToken = getTokenFromCookies();

  useEffect(() => {
    const checkAuth = () => {
      if (!encryptedToken) {
        errorSnackbar("Session Expired! Login to Continue");
        router.push(AUTH.SIGN_IN);
        return false;
      }

      return true;
    };
    setIsLoading(true);
    if (!checkAuth()) {
      return;
    }
    setIsLoading(false);
  }, [pathname, router, encryptedToken]);

  if (isLoading) return <Loading />;

  return <>{children}</>;
}
