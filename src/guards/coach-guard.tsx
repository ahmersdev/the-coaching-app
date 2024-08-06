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
import { capitalizeFirstLetter } from "@/utils";

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
      // if (!tokenSelector) {
      //   errorSnackbar("Session Expired! Login to Continue");
      //   router.push(AUTH.SIGN_IN);
      // }
      // if (!guardSelector) {
      //   errorSnackbar("Session Expired! Login to Continue");
      //   router.push(AUTH.SIGN_IN);
      // }
      // if (guardSelector === "true") {
      //   errorSnackbar("Session Expired! Login to Continue");
      //   router.push(AUTH.SIGN_IN);
      // }

      try {
        const params = {
          authentication_token: tokenSelector,
        };
        const res: any = await getSubscriptionStatusTrigger(params).unwrap();

        if (res?.subscription_status !== "active") {
          const capitalizedStatus = capitalizeFirstLetter(
            res?.subscription_status
          );
          if (res?.subscription_status === "incomplete") {
            errorSnackbar(
              `Subscription ${capitalizedStatus}! Please Purchase a Subscription First.`
            );
          } else {
            errorSnackbar(`Subscription ${capitalizedStatus}! Buy Plan Again.`);
          }
          router.push(`${STRIPE.PLANS}?email=${res?.coach?.email}`);
          return;
        }

        setIsLoading(false);
      } catch (error: any) {
        errorSnackbar("Purchase a Subscription to Continue!");
        router.push(`${STRIPE.PLANS}?email=${error?.data?.coach?.email}`);
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
