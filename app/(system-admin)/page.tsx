"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SYSTEM_ADMIN } from "../_constants/routes";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router?.push(SYSTEM_ADMIN?.DASHBOARD);
  });
  return <></>;
}
