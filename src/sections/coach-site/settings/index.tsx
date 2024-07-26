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

export default function Settings() {
  const tabsDataArray = [
    { title: "Profile", icon: ProfileIcon },
    { title: "Subscription", icon: SubscriptionIcon },
    { title: "Payment Methods", icon: PaymentMethodIcon },
  ];

  return (
    <HorizontalTabs tabsDataArray={tabsDataArray}>
      <Profile />
      <Subscription />
      <PaymentMethods />
    </HorizontalTabs>
  );
}
