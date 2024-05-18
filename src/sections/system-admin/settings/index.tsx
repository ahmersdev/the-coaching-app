"use client";

import HorizontalTabs from "@/components/horizontal-tabs";
import Profile from "./profile";
import Payments from "./payments";
import { PaymentIcon, ProfileIcon } from "@/assets/icons";

const Settings = () => {
  const tabsDataArray = [
    { title: "Profile", icon: ProfileIcon },
    { title: "Payments", icon: PaymentIcon },
  ];

  return (
    <HorizontalTabs tabsDataArray={tabsDataArray}>
      <Profile />
      <Payments />
    </HorizontalTabs>
  );
};

export default Settings;
