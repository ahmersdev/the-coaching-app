import { FormProvider } from "@/components/react-hook-form";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  myProfileFormValidationSchema,
  myProfileDataArray,
  myProfileFormDefaultValues,
} from "./my-profile.data";
import { MyProfileIcon } from "@/assets/icons";
import { SkeletonForm } from "@/components/skeletons";
import { useCallback, useEffect, useMemo } from "react";

const MyProfile = ({
  initialValues,
  isLoading,
  isFetching,
  initialLoading,
}: any) => {
  const defaultValues = useMemo(
    () => myProfileFormDefaultValues({ initialValues }),
    [initialValues]
  );

  const methods: any = useForm({
    resolver: yupResolver(myProfileFormValidationSchema),
    defaultValues,
  });

  const { reset } = methods;

  const resetForm = useCallback(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  useEffect(() => {
    resetForm();
  }, [resetForm]);

  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"flex-end"} gap={1}>
        <MyProfileIcon />
        <Typography variant={"h6"} fontWeight={700} color={"grey.100"} mb={1}>
          My Profile
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      {isLoading || isFetching || initialLoading ? (
        <SkeletonForm length={3} />
      ) : (
        <FormProvider methods={methods}>
          <Grid container spacing={2}>
            {myProfileDataArray?.map((item: any) => (
              <Grid item xs={12} md={item?.md} key={item?.id}>
                <item.component
                  {...item?.componentProps}
                  size={"small"}
                  disabled
                />
              </Grid>
            ))}
          </Grid>
        </FormProvider>
      )}
    </Box>
  );
};

export default MyProfile;
