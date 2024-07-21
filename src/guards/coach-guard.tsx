"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AUTH, STRIPE } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";
import { useLazyGetSubscriptionStatusQuery } from "@/services/guards";
import { useAppSelector } from "@/store/store";
import { IChildrenProps } from "@/interfaces";
import useSyncCookiesWithState from "@/hooks/use-sync-cookies";

export default function CoachGuard({ children }: IChildrenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const tokenSelector = useAppSelector((state) => state.auth.token);
  const guardSelector = useAppSelector((state) => state.auth.guardCheck);

  const [getSubscriptionStatusTrigger, getSubscriptionStatusStatus] =
    useLazyGetSubscriptionStatusQuery();

  useSyncCookiesWithState();

  useEffect(() => {
    const checkAuth = async () => {
      if ((!tokenSelector && guardSelector === "true") || !guardSelector) {
        errorSnackbar("Session Expired! Login to Continue");
        router.push(AUTH.SIGN_IN);
        return;
      }

      try {
        const params = {
          authentication_token: tokenSelector,
        };
        const res: any = await getSubscriptionStatusTrigger(params);

        if (res?.data?.subscription_status !== "active") {
          errorSnackbar("Subscription Expired! Buy Plan Again");
          router.push(
            `${STRIPE.PLANS}?email=${res?.error?.data?.coach?.email}`
          );
          return;
        }

        setIsLoading(false);
      } catch (error) {
        errorSnackbar(
          "Failed to verify subscription status. Please try again."
        );
        router.push(AUTH.SIGN_IN);
      }
    };

    if (tokenSelector) {
      setIsLoading(true);
      checkAuth();
    } else {
      setIsLoading(false);
    }
  }, [
    pathname,
    tokenSelector,
    getSubscriptionStatusTrigger,
    router,
    guardSelector,
  ]);

  if (
    isLoading ||
    getSubscriptionStatusStatus?.isLoading ||
    getSubscriptionStatusStatus?.isFetching
  )
    return <Loading />;

  return <>{children}</>;
}
