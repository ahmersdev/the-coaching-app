import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/store";
import { useGetCoachDetailsQuery } from "@/services/coach-site/settings";
import { decryptValuesFromToken } from "@/utils/auth";

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

  const { data, isLoading, isFetching, isError } = useGetCoachDetailsQuery(
    {
      coach_id: decryptedValues?.coach_id,
    },
    { refetchOnMountOrArgChange: true, skip: !decryptedValues?.coach_id }
  );

  return { open, setOpen, pathName, isLoading, isFetching, isError, data };
}
