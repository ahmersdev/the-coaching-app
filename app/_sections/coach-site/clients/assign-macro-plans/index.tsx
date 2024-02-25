"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import { FormProvider } from "@/app/_components/react-hook-form";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { ArrowBackIcon } from "@/app/_assets/icons";
import { COACH_SITE } from "@/app/_constants/routes";
import { LoadingButton } from "@mui/lab";
import Plans from "./plans";

const macroValidationSchema: any = Yup.object().shape({
  proteins: Yup.string().trim(),
  carbs: Yup.string().trim(),
  fat: Yup.string().trim(),
  type: Yup.string(),
  note: Yup.string().trim(),
});

const defaultValues = {
  proteins: "",
  carbs: "",
  fat: "",
  type: "",
  note: "",
};

export default function AssignMacroPlans() {
  const methods: any = useForm({
    resolver: yupResolver(macroValidationSchema),
    defaultValues,
  });

  const { handleSubmit, control } = methods;

  const onSubmit = (data: any) => {
    console.log(data);

    enqueueSnackbar("Workout Assigned Successfully!", {
      variant: "success",
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={1}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Link href={COACH_SITE?.CLIENTS}>
            <ArrowBackIcon />
          </Link>
          <Typography variant={"h3"} fontWeight={600}>
            Assign Macro Plans
          </Typography>
        </Box>

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
          Assign
        </LoadingButton>
      </Box>

      <Plans control={control} />

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
        Done
      </LoadingButton>
    </FormProvider>
  );
}
