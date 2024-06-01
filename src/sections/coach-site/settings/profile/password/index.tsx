import { FormProvider } from "@/components/react-hook-form";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { PasswordIcon } from "@/assets/icons";
import usePassword from "./use-password";

const Password = ({ initialValues }: any) => {
  const {
    methods,
    handleSubmit,
    onSubmit,
    passwordDataArray,
    updateCoachPasswordStatus,
  } = usePassword({ initialValues });

  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"flex-end"} gap={1}>
        <PasswordIcon />
        <Typography variant={"h6"} fontWeight={700} color={"grey.100"} mb={1}>
          Password
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {passwordDataArray?.map((item: any) => (
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
                "&.Mui-disabled": {
                  bgcolor: "primary.main",
                },
              }}
              disableElevation
              type={"submit"}
              loading={updateCoachPasswordStatus?.isLoading}
            >
              Update
            </LoadingButton>
          </Grid>
        </Grid>
      </FormProvider>
    </Box>
  );
};

export default Password;
