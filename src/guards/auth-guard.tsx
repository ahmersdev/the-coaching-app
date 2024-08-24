"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { SALE_SITE } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";
import { excludedAuthPaths } from "./guards.data";
import { IChildrenProps } from "@/interfaces";
import useSyncCookiesWithState from "@/hooks/use-sync-cookies";
import Cookies from "js-cookie";

export default function AuthGuard({ children }: IChildrenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useSyncCookiesWithState();

  const authenticationToken = Cookies.get("authentication_token");

  const checkAuth = useCallback(() => {
    if (excludedAuthPaths.includes(pathname)) {
      return true;
    }

    if (authenticationToken) {
      errorSnackbar("Already Logged In!");
      router.push(SALE_SITE.HOME);
      return false;
    }

    return true;
  }, [pathname, authenticationToken, router]);

  useEffect(() => {
    setIsLoading(true);
    const isAuthValid = checkAuth();
    setIsLoading(!isAuthValid);
  }, [checkAuth]);

  if (isLoading) return <Loading />;

  return <>{children}</>;
}
