import { Stack } from "@mui/material";
import MyProfile from "./my-profile";
import About from "./about";
import Password from "./password";
import GymAddress from "./gym-address";
import GymDetails from "./gym-details";
import { useGetCoachDetailsQuery } from "@/services/coach-site/settings/profile";

export default function Profile() {
  const { data, isLoading, isError, isFetching } = useGetCoachDetailsQuery({
    coach_id: 16,
  });

  return (
    <Stack direction={"column"} spacing={2}>
      <MyProfile />

      <About />

      <Password />

      <GymDetails />

      <GymAddress />
    </Stack>
  );
}
