import { useTheme } from "@mui/material";
import { getSaleSiteDrawerArray } from "./drawer.data";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import useSyncCookiesWithState from "@/hooks/use-sync-cookies";
import { decryptValuesFromToken } from "@/utils/auth";
import Cookies from "js-cookie";

export default function useDrawerSaleSite() {
  const theme: any = useTheme();
  const pathName: any = usePathname();

  const [decryptedValues, setDecryptedValues] = useState<any>(null);

  useSyncCookiesWithState();

  const tokenSelector = Cookies.get("authentication_token_coaching_app");

  useEffect(() => {
    const decryptToken = async () => {
      if (tokenSelector) {
        const values = await decryptValuesFromToken(tokenSelector);
        setDecryptedValues(values);
      } else {
        setDecryptedValues(null);
      }
    };

    decryptToken();
  }, [tokenSelector]);

  const saleSiteDrawerArray = getSaleSiteDrawerArray(decryptedValues);

  return { theme, saleSiteDrawerArray, pathName };
}
