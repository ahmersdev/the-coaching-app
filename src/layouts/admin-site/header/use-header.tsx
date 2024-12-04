import { useGetCoachDetailsQuery } from "@/services/coach-site/settings";
import { useAppSelector } from "@/store/store";
import { decryptValuesFromToken } from "@/utils/auth";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useHeader() {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);
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

  const coach_id = decryptedValues?.coach_id;

  const { data, isLoading, isFetching, isError } = useGetCoachDetailsQuery(
    {
      coach_id,
    },
    { refetchOnMountOrArgChange: true, skip: !coach_id }
  );

  return {
    pathName,
    open,
    setOpen,
    data,
    isLoading,
    isFetching,
    isError,
  };
}
