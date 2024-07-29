"use client";

import {
  SubscriptionIcon,
  ProfileIcon,
  PaymentMethodIcon,
} from "@/assets/icons";
import HorizontalTabs from "@/components/horizontal-tabs";
import Profile from "./profile";
import Subscription from "./subscription";
import PaymentMethods from "./payment-methods";
import useSettings from "./use-settings";

export default function Settings() {
  const { data, isError, isLoading, isFetching, initialLoading, coach_id } =
    useSettings();

  const tabsDataArray = [
    { title: "Profile", icon: ProfileIcon },
    { title: "Subscription", icon: SubscriptionIcon },
    { title: "Payment Methods", icon: PaymentMethodIcon },
  ];

  return (
    <HorizontalTabs tabsDataArray={tabsDataArray}>
      <Profile
        data={data}
        isError={isError}
        isLoading={isLoading}
        isFetching={isFetching}
        initialLoading={initialLoading}
      />
      <Subscription coach_id={coach_id} />
      <PaymentMethods
        data={data}
        isError={isError}
        isLoading={isLoading}
        isFetching={isFetching}
        initialLoading={initialLoading}
      />
    </HorizontalTabs>
  );
}
