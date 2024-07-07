"use client";

import { getTokenFromCookies } from "@/utils/auth";
import { CoachGuardProps } from "./guards.type";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AUTH } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";

export default function CoachGuard({ children }: CoachGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = () => {
    const encryptedToken = getTokenFromCookies();

    if (!encryptedToken) {
      errorSnackbar("Please Login to Continue.");
      router.push(AUTH.SIGN_IN);
      return false;
    }

    return true;
  };

  useEffect(() => {
    setIsLoading(true);
    if (!checkAuth()) {
      return;
    }
    setIsLoading(false);
  }, [pathname, checkAuth]);

  if (isLoading) return <Loading />;

  return <>{children}</>;
}
