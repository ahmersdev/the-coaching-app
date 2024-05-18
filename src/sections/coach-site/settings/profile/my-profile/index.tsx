import { FormProvider } from "@/components/react-hook-form";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import {
  myProfileFormValidationSchema,
  myProfileDataArray,
  myProfileFormDefaultValues,
} from "./my-profile.data";
import { MyProfileIcon } from "@/assets/icons";
import { successSnackbar } from "@/utils/api";

const MyProfile = () => {
  const methods: any = useForm({
    resolver: yupResolver(myProfileFormValidationSchema),
    defaultValues: myProfileFormDefaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    successSnackbar("Profile Updated Successfully!");
    reset(myProfileFormDefaultValues);
  };

  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"flex-end"} gap={1}>
        <MyProfileIcon />
        <Typography variant={"h6"} fontWeight={700} color={"grey.100"} mb={1}>
          My Profile
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {myProfileDataArray?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component {...item?.componentProps} size={"small"} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <LoadingButton
              variant={"contained"}
              sx={{
                color: "grey.100",
                width: 132,
                borderRadius: 25,
                border: "1px solid",
                borderColor: "primary.main",
              }}
              disableElevation
              type={"submit"}
            >
              Update
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default MyProfile;
