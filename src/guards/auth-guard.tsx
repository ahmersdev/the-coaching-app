"use client";

import { AuthGuardProps } from "./guards.type";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SALE_SITE } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";
import { useAppSelector } from "@/store/store";
import { excludedAuthPaths } from "./guards.data";

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const tokenSelector = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const checkAuth = () => {
      if (excludedAuthPaths.includes(pathname)) {
        return true;
      }

      if (tokenSelector) {
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
  }, [pathname, router, tokenSelector]);

  if (isLoading) return <Loading />;

  return <>{children}</>;
}
