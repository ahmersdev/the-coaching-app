"use client";

import { SubscriptionIcon, ProfileIcon } from "@/assets/icons";
import HorizontalTabs from "@/components/horizontal-tabs";
import Profile from "./profile";
import Subscription from "./subscription";

export default function Settings() {
  const tabsDataArray = [
    { title: "Profile", icon: ProfileIcon },
    { title: "Subscription", icon: SubscriptionIcon },
  ];

  return (
    <HorizontalTabs tabsDataArray={tabsDataArray}>
      <Profile />
      <Subscription />
    </HorizontalTabs>
  );
}
