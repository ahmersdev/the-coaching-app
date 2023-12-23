import { FormProvider } from "@/app/_components/react-hook-form";
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import {
  myProfileFormValidationSchema,
  myProfileDataArray,
  myProfileFormDefaultValues,
} from "./my-profile.data";

const MyProfile = () => {
  const theme: any = useTheme();

  const methods: any = useForm({
    resolver: yupResolver(myProfileFormValidationSchema),
    defaultValues: myProfileFormDefaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Stack direction={"column"} spacing={2}>
      <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
        <Typography variant={"h6"} fontWeight={700} color={"grey.100"} mb={1}>
          My Profile
        </Typography>

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
                  background: theme?.palette?.primary?.main,
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
    </Stack>
  );
};

export default MyProfile;
