import { Stack } from "@mui/material";
import MyProfile from "./my-profile";
import Password from "./password";
import Address from "./address";

const Profile = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <MyProfile />

      <Password />

      <Address />
    </Stack>
  );
};

export default Profile;
