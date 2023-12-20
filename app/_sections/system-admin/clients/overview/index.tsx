"use client";

import { useSearchParams } from "next/navigation";

const Overview = () => {
  const searchParams = useSearchParams();
  const clientId = searchParams.get("clientId");

  return <>Clients Overview {clientId}</>;
};

export default Overview;
