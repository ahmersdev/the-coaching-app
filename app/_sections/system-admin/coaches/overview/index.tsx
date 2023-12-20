"use client";

import { useSearchParams } from "next/navigation";

const Overview = () => {
  const searchParams = useSearchParams();
  const coachId = searchParams.get("coachId");

  return <>Coaches Overview {coachId}</>;
};

export default Overview;
