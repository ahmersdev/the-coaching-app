import { Stack } from "@mui/material";
import MyProfile from "./my-profile";
import About from "./about";
import Password from "./password";
import GymAddress from "./gym-address";
import GymDetails from "./gym-details";
import { useGetCoachDetailsQuery } from "@/services/coach-site/settings/profile";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/store";
import { decryptValuesFromToken } from "@/utils/auth";
import ErrorScreen from "@/components/error-screen";

export default function Profile() {
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

  return (
    <Stack direction={"column"} spacing={2}>
      {isError ? (
        <ErrorScreen />
      ) : (
        <>
          <MyProfile
            initialValues={data}
            isLoading={isLoading}
            isFetching={isFetching}
            initialLoading={initialLoading}
          />

          <About />

          <Password />

          <GymDetails />

          <GymAddress />
        </>
      )}
    </Stack>
  );
}
