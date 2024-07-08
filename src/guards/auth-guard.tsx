"use client";

import { getTokenFromCookies } from "@/utils/auth";
import { AuthGuardProps } from "./guards.type";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SALE_SITE } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const encryptedToken = getTokenFromCookies();

  useEffect(() => {
    const checkAuth = () => {
      if (encryptedToken) {
        errorSnackbar("Already Logged In!");
        router.push(SALE_SITE.HOME);
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
