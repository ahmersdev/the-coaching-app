import { FormProvider } from "@/components/react-hook-form";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { gymAddressDataArray } from "./gym-address.data";
import { GymAddressIcon } from "@/assets/icons";
import { SkeletonForm } from "@/components/skeletons";
import useGymAddress from "./use-gym-address";

const GymAddress = ({
  initialValues,
  isLoading,
  isFetching,
  initialLoading,
}: any) => {
  const { methods, handleSubmit, onSubmit, updateGymAddressStatus } =
    useGymAddress({ initialValues });

  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"flex-end"} gap={1}>
        <GymAddressIcon />
        <Typography variant={"h6"} fontWeight={700} color={"grey.100"} mb={1}>
          Gym Address
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />
      {isLoading || isFetching || initialLoading ? (
        <SkeletonForm />
      ) : (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            {gymAddressDataArray.map((item: any) => (
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
                loading={updateGymAddressStatus?.isLoading}
              >
                Update
              </LoadingButton>
            </Grid>
          </Grid>
        </FormProvider>
      )}
    </Box>
  );
};

export default GymAddress;
