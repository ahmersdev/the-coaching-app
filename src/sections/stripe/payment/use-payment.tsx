import { useTheme } from "@mui/material";
import { useGetClientSecretQuery } from "@/services/stripe";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/store";

export default function usePayment() {
  const theme: any = useTheme();
  const searchParams = useSearchParams();

  const [clientSecret, setClientSecret] = useState<any>();
  const clientSecretSelector = useAppSelector(
    (state) => state.stripe.clientSecret
  );

  const email = searchParams.get("email");

  const params = { email };

  const { data, isLoading, isFetching } = useGetClientSecretQuery(params);

  useEffect(() => {
    if (clientSecretSelector) {
      setClientSecret(clientSecretSelector);
    } else if (data?.client_secret) {
      setClientSecret(data.client_secret);
    }
  }, [clientSecretSelector, data]);

  const appearance: any = {
    theme: "flat",
    variables: {
      colorPrimary: theme.palette.primary.main,
      colorBackground: theme.palette.secondary[900],
      colorText: theme.palette.grey[100],
    },
    rules: {
      ".Input": {
        border: 1.5,
        borderColor: theme.palette.secondary[600],
        backgroundColor: theme.palette.secondary[900],
        color: theme.palette.grey[100],
      },
      ".Input:focus": {
        borderColor: theme.palette.primary.main,
      },
    },
  };

  return { isLoading, isFetching, clientSecret, appearance };
}
