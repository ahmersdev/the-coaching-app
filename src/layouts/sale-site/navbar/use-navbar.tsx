import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/store";
import { useTheme } from "@mui/material";
import { decryptValuesFromToken } from "@/utils/auth";
import { useEffect, useState } from "react";
import useSyncCookiesWithState from "@/hooks/use-sync-cookies";

export default function useNavbar() {
  const pathName = usePathname();
  const theme = useTheme();

  const [initialLoad, setInitialLoad] = useState(true);
  const [decryptedValues, setDecryptedValues] = useState<any>(null);

  useSyncCookiesWithState();

  const tokenSelector = useAppSelector((state) => state.auth.token);

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
