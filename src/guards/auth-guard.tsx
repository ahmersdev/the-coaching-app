"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SALE_SITE } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";
import { useAppSelector } from "@/store/store";
import { excludedAuthPaths } from "./guards.data";
import { IChildrenProps } from "@/interfaces";
import useSyncCookiesWithState from "@/hooks/use-sync-cookies";

export default function AuthGuard({ children }: IChildrenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const tokenSelector = useAppSelector((state) => state.auth.token);
  const guardSelector = useAppSelector((state) => state.auth.guardCheck);

  useSyncCookiesWithState();

  useEffect(() => {
    const checkAuth = () => {
      if (excludedAuthPaths.includes(pathname)) {
        return true;
      }

      if (tokenSelector && guardSelector === "false") {
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
  }, [pathname, router, tokenSelector, guardSelector]);

  if (isLoading) return <Loading />;

  return <>{children}</>;
}
