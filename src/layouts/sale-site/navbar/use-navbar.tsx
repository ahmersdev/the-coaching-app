import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material";
import { decryptValuesFromToken } from "@/utils/auth";
import { useEffect, useState } from "react";
import useSyncCookiesWithState from "@/hooks/use-sync-cookies";
import Cookies from "js-cookie";

export default function useNavbar() {
  const pathName = usePathname();
  const theme = useTheme();

  const [initialLoad, setInitialLoad] = useState(true);
  const [decryptedValues, setDecryptedValues] = useState<any>(null);

  useSyncCookiesWithState();

  const tokenSelector = Cookies.get("authentication_token");

  useEffect(() => {
    const decryptToken = async () => {
      if (tokenSelector) {
        const values = await decryptValuesFromToken(tokenSelector);
        setDecryptedValues(values);
      } else {
        setDecryptedValues(null);
      }
      setInitialLoad(false);
    };

    decryptToken();
  }, [tokenSelector]);

  return { theme, pathName, decryptedValues, initialLoad };
}
