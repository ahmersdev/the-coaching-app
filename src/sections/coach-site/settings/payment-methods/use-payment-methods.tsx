import { useGetPaymentMethodsQuery } from "@/services/coach-site/settings/payment-methods";
import { useAppSelector } from "@/store/store";
import { decryptValuesFromToken } from "@/utils/auth";
import { useEffect, useState } from "react";
import { CARD_BRANDS } from "./payment-methods.data";
import {
  CardAmericanIcon,
  CardDinersIcon,
  CardDiscoverIcon,
  CardJcbIcon,
  CardMasterIcon,
  CardUnionPayIcon,
  CardUnknownIcon,
  CardVisaIcon,
} from "@/assets/icons";

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

  const cardBrandIcon = (cardBrand: any) => {
    let brandIcon;

    switch (cardBrand) {
      case CARD_BRANDS?.VISA:
        brandIcon = <CardVisaIcon />;
        break;

      case CARD_BRANDS?.MASTER_CARD:
        brandIcon = <CardMasterIcon />;
        break;

      case CARD_BRANDS?.AMERICAN_EXPRESS:
        brandIcon = <CardAmericanIcon />;
        break;

      case CARD_BRANDS?.DISCOVER:
        brandIcon = <CardDiscoverIcon />;
        break;

      case CARD_BRANDS?.DINERS_CLUB:
        brandIcon = <CardDinersIcon />;
        break;

      case CARD_BRANDS?.JCB:
        brandIcon = <CardJcbIcon />;
        break;

      case CARD_BRANDS?.UNION_PAY:
        brandIcon = <CardUnionPayIcon />;
        break;

      default:
        brandIcon = <CardUnknownIcon />;
        break;
    }
    return brandIcon;
  };

  return {
    isLoading,
    isFetching,
    initialLoading,
    isError,
    data,
    transformedMonth,
    cardBrandIcon,
  };
}
