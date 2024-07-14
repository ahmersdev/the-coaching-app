"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AUTH } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";
import { useAppSelector } from "@/store/store";
import { IChildrenProps } from "@/interfaces";

export default function AdminGuard({ children }: IChildrenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const tokenSelector = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const checkAuth = () => {
      if (!tokenSelector) {
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
  }, [pathname, router, tokenSelector]);

  if (isLoading) return <Loading />;

  return <>{children}</>;
}
