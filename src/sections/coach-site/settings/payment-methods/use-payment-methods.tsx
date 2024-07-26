import { useGetPaymentMethodsQuery } from "@/services/coach-site/settings/payment-methods";
import { useAppSelector } from "@/store/store";
import { decryptValuesFromToken } from "@/utils/auth";
import { useEffect, useState } from "react";

export default function usePaymentMethods() {
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

  const { data, isLoading, isFetching, isError } = useGetPaymentMethodsQuery(
    {
      coach_id: decryptedValues?.coach_id,
    },
    { skip: !decryptedValues?.coach_id }
  );

  const transformedMonth =
    data?.payment_method?.exp_month < 10
      ? `0${data?.payment_method?.exp_month}`
      : data?.payment_method?.exp_month;

  return {
    isLoading,
    isFetching,
    initialLoading,
    isError,
    data,
    transformedMonth,
  };
}
