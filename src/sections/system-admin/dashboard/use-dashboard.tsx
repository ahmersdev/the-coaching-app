import { useGetAdminCoachesQuery } from "@/services/admin/coaches";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/store";
import { decryptValuesFromToken } from "@/utils/auth";
import { useGetCoachDetailsQuery } from "@/services/coach-site/settings";
import { useGetAdminClientDetailsQuery } from "@/services/admin/clients";

export default function useDashboard() {
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

  const paramsCoach = {
    page: 1,
    limit: 12,
  };

  const {
    data: coachData,
    isLoading: coachLoading,
    isFetching: coachFetching,
    isError: coachError,
  } = useGetAdminCoachesQuery(paramsCoach, { refetchOnMountOrArgChange: true });

  const paramsClients = {
    page: 1,
    limit: 15,
  };

  const {
    data: clientData,
    isLoading: clientLoading,
    isFetching: clientFetching,
    isError: clientError,
  } = useGetAdminClientDetailsQuery(paramsClients, {
    refetchOnMountOrArgChange: true,
  });

  return {
    data,
    isLoading,
    isFetching,
    isError,
    initialLoading,
    coachData,
    coachLoading,
    coachFetching,
    coachError,
    clientData,
    clientLoading,
    clientFetching,
    clientError,
  };
}
