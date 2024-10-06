"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { AUTH, STRIPE, SALE_SITE } from "@/constants/routes";
import Loading from "@/app/loading";
import { errorSnackbar } from "@/utils/api";
import { useLazyGetSubscriptionStatusQuery } from "@/services/guards";
import useSyncCookiesWithState from "@/hooks/use-sync-cookies";
import { capitalizeFirstLetter } from "@/utils";
import Cookies from "js-cookie";
import { ISubscriptionStatusResponse } from "./guards.interface";
import { GUARD_ROLES } from "@/constants";
import { IChildrenProps } from "@/interfaces";
import { decryptValuesFromToken } from "@/utils/auth";

export default function AuthGuard({ children }: IChildrenProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  const [decryptedValues, setDecryptedValues] = useState<any>({});

  useSyncCookiesWithState();

  const authenticationToken = Cookies.get("authentication_token");

  useEffect(() => {
    const decryptToken = async () => {
      if (authenticationToken) {
        const values = await decryptValuesFromToken(authenticationToken);
        setDecryptedValues(values);
      }
    };

    decryptToken();
  }, [authenticationToken]);

  const [
    getSubscriptionStatusTrigger,
    { isLoading: isSubscriptionLoading, isFetching },
  ] = useLazyGetSubscriptionStatusQuery();

  const isRoleValidForRoute = useCallback(() => {
    const unauthorized = (role: string, prefix: string) => {
      const isUnauthorized =
        decryptedValues?.user_role === role && pathname.startsWith(prefix);
      if (isUnauthorized) {
        errorSnackbar("Unauthorized! Access Denied.");
        router.push(SALE_SITE.HOME);
      }
      return isUnauthorized;
    };

    return (
      !unauthorized(GUARD_ROLES.COACH, "/admin") &&
      !unauthorized(GUARD_ROLES.ADMIN, "/coach")
    );
  }, [decryptedValues, pathname, router]);

  const checkAuth = useCallback(async () => {
    if (!authenticationToken) {
      errorSnackbar("Session Expired! Login to Continue");
      router.push(AUTH.SIGN_IN);
      return false;
    }

    if (decryptedValues?.user_role === GUARD_ROLES.COACH) {
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
        Cookies.remove("authentication_token");
        router.push(AUTH.SIGN_IN);
        return false;
      }
    }

    return true;
  }, [
    authenticationToken,
    decryptedValues,
    getSubscriptionStatusTrigger,
    router,
  ]);

  useEffect(() => {
    const executeAuthCheck = async () => {
      setIsLoading(true);

      if (!isRoleValidForRoute()) return;

      const isAuthValid = await checkAuth();
      if (!isAuthValid) return;

      setIsLoading(false);
    };

    executeAuthCheck();
  }, [pathname, isRoleValidForRoute, checkAuth]);

  if (isLoading || isSubscriptionLoading || isFetching) <Loading />;

  return <>{children}</>;
}
