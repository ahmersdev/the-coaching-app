import { Stack } from "@mui/material";
import MyProfile from "./my-profile";
import About from "./about";
import Password from "./password";
import ErrorScreen from "@/components/error-screen";

export default function Profile({
  data,
  isError,
  isLoading,
  isFetching,
  initialLoading,
}: any) {
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

          <About
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
}
