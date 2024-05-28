import { usePathname } from "next/navigation";
import { useAppSelector } from "@/store/store";
import { useTheme } from "@mui/material";
import { decryptValuesFromToken } from "@/utils/auth";
import { useEffect, useState } from "react";

export default function useNavbar() {
  const pathName = usePathname();
  const theme: any = useTheme();

  const [decryptedValues, setDecryptedValues] = useState<any>({});

  const tokenSelector = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const decryptToken = async () => {
      if (tokenSelector) {
        const values = await decryptValuesFromToken(tokenSelector);
        setDecryptedValues(values);
      }
    };

    decryptToken();
  }, [tokenSelector]);

  return { theme, pathName, decryptedValues };
}
