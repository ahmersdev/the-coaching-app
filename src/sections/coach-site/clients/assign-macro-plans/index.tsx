"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@/components/react-hook-form";
import * as Yup from "yup";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { ArrowBackIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { LoadingButton } from "@mui/lab";
import Plans from "./plans";
import { successSnackbar } from "@/utils/api";

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
    const updatedData = [
      {
        proteins: data?.proteins || "",
        carbs: data?.carbs || "",
        fat: data?.fat || "",
        type: data?.type || "",
        note: data?.note || "",
      },
      ...(data?.macros || [])
        ?.filter(
          (macro: any) =>
            macro?.proteins ||
            macro?.carbs ||
            macro?.fat ||
            macro?.type ||
            macro?.note
        )
        ?.map((macro: any) => ({
          proteins: macro?.proteins || "",
          carbs: macro?.carbs || "",
          fat: macro?.fat || "",
          type: macro?.type || "",
          note: macro?.note || "",
        })),
    ];

    successSnackbar("Macro Assigned Successfully!");
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
