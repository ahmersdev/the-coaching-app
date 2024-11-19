import { Stack } from "@mui/material";
import MyProfile from "./my-profile";
import Password from "./password";
import ErrorScreen from "@/components/error-screen";

const Profile = ({
  data,
  isError,
  isLoading,
  isFetching,
  initialLoading,
}: any) => {
  return (
    <Stack direction={"column"} spacing={2}>
      {isError ? (
        <ErrorScreen />
      ) : (
        <>
          <MyProfile
            initialValues={data?.coach}
            isLoading={isLoading}
            isFetching={isFetching}
            initialLoading={initialLoading}
          />

          <Password initialValues={data?.coach} />
        </>
      )}
    </Stack>
  );
};

export default Profile;
