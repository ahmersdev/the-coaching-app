import { Stack } from "@mui/material";
import MyProfile from "./my-profile";
import About from "./about";
import Password from "./password";
import GymAddress from "./gym-address";
import GymDetails from "./gym-details";

export default function Profile() {
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
