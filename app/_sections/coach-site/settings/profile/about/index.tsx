import { MyProfileIcon } from "@/app/_assets/icons";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { FormProvider } from "@/app/_components/react-hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import {
  aboutFormValidationSchema,
  aboutFormDefaultValues,
  aboutDataArray,
} from "./about.data";
import { LoadingButton } from "@mui/lab";

export default function About() {
  const methods: any = useForm({
    resolver: yupResolver(aboutFormValidationSchema),
    defaultValues: aboutFormDefaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    console.log(data);
    enqueueSnackbar("About Updated Successfully!", {
      variant: "success",
    });
    reset(aboutFormDefaultValues);
  };

  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"flex-end"} gap={1}>
        <MyProfileIcon />
        <Typography variant={"h6"} fontWeight={700} color={"grey.100"} mb={1}>
          About
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {aboutDataArray?.map((item: any) => (
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
}
