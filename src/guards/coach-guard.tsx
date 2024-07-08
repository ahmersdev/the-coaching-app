"use client";

import { getTokenFromCookies } from "@/utils/auth";
import { CoachGuardProps } from "./guards.type";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AUTH, STRIPE } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";
import { useLazyGetSubscriptionStatusQuery } from "@/services/guards";

export default function CoachGuard({ children }: CoachGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const encryptedToken = getTokenFromCookies();

  const [getSubscriptionStatusTrigger, getSubscriptionStatusStatus] =
    useLazyGetSubscriptionStatusQuery();

  useEffect(() => {
    const checkAuth = async () => {
      if (!encryptedToken) {
        errorSnackbar("Session Expired! Login to Continue");
        router.push(AUTH.SIGN_IN);
        return;
      }

      const params = {
        authentication_token: encryptedToken,
      };
      const res: any = await getSubscriptionStatusTrigger(params);

      if (res?.data?.subscription_status !== "active") {
        errorSnackbar("Subscription Expired! Buy Plan Again");
        router.push(STRIPE.PLANS);
        return;
      }

      setIsLoading(false);
    };

    setIsLoading(true);
    checkAuth();
  }, [pathname, encryptedToken, getSubscriptionStatusTrigger, router]);

  if (
    isLoading ||
    getSubscriptionStatusStatus?.isLoading ||
    getSubscriptionStatusStatus?.isFetching
  )
    return <Loading />;

  return <>{children}</>;
}
