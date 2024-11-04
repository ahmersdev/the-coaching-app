import { useGetCoachDetailsQuery } from "@/services/coach-site/settings";
import { useAppSelector } from "@/store/store";
import { decryptValuesFromToken } from "@/utils/auth";
import { useTheme } from "@mui/material";
import { useEffect, useState } from "react";

export default function useHeader() {
  const theme: any = useTheme();

  const [hoverStates, setHoverStates] = useState(false);
  const [decryptedValues, setDecryptedValues] = useState<any>({});
  const [initialLoading, setInitialLoading] = useState(true);

  const tokenSelector = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const decryptToken = async () => {
      if (tokenSelector) {
        const values = await decryptValuesFromToken(tokenSelector);
        setDecryptedValues(values);
      }
    };

    decryptToken();
    setInitialLoading(false);
  }, [tokenSelector]);

  const coach_id = decryptedValues?.coach_id;

  const { data, isLoading, isFetching, isError } = useGetCoachDetailsQuery(
    {
      coach_id,
    },
    { refetchOnMountOrArgChange: true, skip: !coach_id }
  );

  return {
    theme,
    hoverStates,
    setHoverStates,
    initialLoading,
    data,
    isLoading,
    isFetching,
    isError,
  };
}
