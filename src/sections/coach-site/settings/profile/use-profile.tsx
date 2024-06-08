import { useGetCoachDetailsQuery } from "@/services/coach-site/settings/profile";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/store";
import { decryptValuesFromToken } from "@/utils/auth";

export default function useProfile() {
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

  const { data, isLoading, isFetching, isError } = useGetCoachDetailsQuery(
    {
      coach_id: decryptedValues?.coach_id,
    },
    { refetchOnMountOrArgChange: true, skip: !decryptedValues?.coach_id }
  );

  return { data, isError, isLoading, isFetching, initialLoading };
}
