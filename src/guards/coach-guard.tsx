"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { AUTH, STRIPE } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";
import { useLazyGetSubscriptionStatusQuery } from "@/services/guards";
import { IChildrenProps } from "@/interfaces";
import useSyncCookiesWithState from "@/hooks/use-sync-cookies";
import { capitalizeFirstLetter } from "@/utils";
import Cookies from "js-cookie";
import { ISubscriptionStatusResponse } from "./guards.interface";

export default function CoachGuard({ children }: IChildrenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useSyncCookiesWithState();

  const authenticationToken = Cookies.get("authentication_token");

  const [getSubscriptionStatusTrigger, getSubscriptionStatusStatus] =
    useLazyGetSubscriptionStatusQuery();

  const checkAuth = useCallback(async () => {
    if (!authenticationToken) {
      errorSnackbar("Session Expired! Login to Continue");
      router.push(AUTH.SIGN_IN);
      return false;
    }

    try {
      const params = { authentication_token: authenticationToken };
      const res: ISubscriptionStatusResponse =
        await getSubscriptionStatusTrigger(params).unwrap();

      if (res.subscription_status !== "active") {
        const capitalizedStatus = capitalizeFirstLetter(
          res.subscription_status
        );
        const errorMessage =
          res.subscription_status === "incomplete"
            ? `Subscription ${capitalizedStatus}! Please Purchase a Subscription First.`
            : `Subscription ${capitalizedStatus}! Buy Plan Again.`;
        errorSnackbar(errorMessage);
        router.push(`${STRIPE.PLANS}?email=${res.coach.email}`);
        return false;
      }
    } catch (error) {
      errorSnackbar();
      router.push(AUTH.SIGN_IN);
      return false;
    }

    return true;
  }, [authenticationToken, getSubscriptionStatusTrigger, router]);

  useEffect(() => {
    const executeAuthCheck = async () => {
      setIsLoading(true);
      const isAuthValid = await checkAuth();
      setIsLoading(!isAuthValid);
    };

    executeAuthCheck();
  }, [pathname, checkAuth]);

  if (
    isLoading ||
    getSubscriptionStatusStatus.isLoading ||
    getSubscriptionStatusStatus.isFetching
  ) {
    return <Loading />;
  }

  return <>{children}</>;
}
