"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AUTH, STRIPE } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";
import { useLazyGetSubscriptionStatusQuery } from "@/services/guards";
import { useAppSelector } from "@/store/store";
import { ICoachGuardProps } from "./guards.interface";

export default function CoachGuard({ children }: ICoachGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const tokenSelector = useAppSelector((state) => state.auth.token);

  const [getSubscriptionStatusTrigger, getSubscriptionStatusStatus] =
    useLazyGetSubscriptionStatusQuery();

  useEffect(() => {
    const checkAuth = async () => {
      if (!tokenSelector) {
        errorSnackbar("Session Expired! Login to Continue");
        router.push(AUTH.SIGN_IN);
        return;
      }

      const params = {
        authentication_token: tokenSelector,
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
  }, [pathname, tokenSelector, getSubscriptionStatusTrigger, router]);

  if (
    isLoading ||
    getSubscriptionStatusStatus?.isLoading ||
    getSubscriptionStatusStatus?.isFetching
  )
    return <Loading />;

  return <>{children}</>;
}
