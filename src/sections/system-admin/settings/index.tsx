"use client";

import HorizontalTabs from "@/components/horizontal-tabs";
import Profile from "./profile";
import Payments from "./payments";
import { PaymentIcon, ProfileIcon } from "@/assets/icons";
import useSettings from "./use-settings";

const Settings = () => {
  const { data, isError, isLoading, isFetching, initialLoading } =
    useSettings();

  const tabsDataArray = [
    { title: "Profile", icon: ProfileIcon },
    { title: "Payments", icon: PaymentIcon },
  ];

  return (
    // <HorizontalTabs tabsDataArray={tabsDataArray}>
    <Profile
      data={data}
      isError={isError}
      isLoading={isLoading}
      isFetching={isFetching}
      initialLoading={initialLoading}
    />

    //   <Payments />
    // </HorizontalTabs>
  );
};

export default Settings;
