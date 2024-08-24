"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider } from "@/components/react-hook-form";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { ArrowBackIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { LoadingButton } from "@mui/lab";
import { successSnackbar } from "@/utils/api";
import {
  getMacroPlanOneDataArray,
  macroDefaultValues,
  macroValidationSchema,
} from "./assign-macro-plans.data";
import { MacroIcon } from "@/assets/icons";

export default function AssignMacroPlans() {
  const methods: any = useForm({
    resolver: yupResolver(macroValidationSchema),
    defaultValues: macroDefaultValues,
  });

  const { handleSubmit, control } = methods;

  const {
    fields: fieldsMacro,
    append: appendMacro,
    remove: removeMacro,
  } = useFieldArray({
    control,
    name: "macros",
  });

  const handleAddMacro = () => {
    appendMacro(macroDefaultValues.macros);
  };

  const handleRemoveMacro = (macroIndex: any) => {
    removeMacro(macroIndex);
  };

  const onSubmit = (data: any) => {
    console.log(data?.macros);

    successSnackbar("Macro Assigned Successfully!");
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Link href={COACH_SITE.CLIENTS}>
          <ArrowBackIcon />
        </Link>
        <Typography variant={"h3"} fontWeight={600}>
          Assign Macro Plans
        </Typography>
      </Box>

      <Box my={2} bgcolor={"secondary.main"} borderRadius={3} p={2}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <MacroIcon />
          <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
            Target Macro&rsquo;s
          </Typography>
        </Box>
        <Divider sx={{ my: 2 }} />

        {fieldsMacro?.map((macro: any, macroIndex: any) => (
          <Box
            bgcolor={"secondary.900"}
            borderRadius={3}
            p={1}
            my={2}
            key={macro?.id}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography
                variant={"h6"}
                color={"grey.100"}
                fontWeight={700}
                mb={2}
              >
                Target Nutrition&rsquo;s
              </Typography>
              {macroIndex !== 0 && (
                <Typography
                  variant={"body1"}
                  color={"grey.100"}
                  fontWeight={900}
                  onClick={() => handleRemoveMacro?.(macroIndex)}
                  mr={2}
                  sx={{ cursor: "pointer" }}
                >
                  X
                </Typography>
              )}
            </Box>

            <Grid container spacing={2}>
              {getMacroPlanOneDataArray(macroIndex)?.map((item: any) => (
                <Grid item xs={12} md={item?.md} key={item.id}>
                  <item.component {...item.componentProps} size={"small"} />
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}

        <Button
          variant={"contained"}
          fullWidth
          sx={{
            color: "grey.100",
            borderRadius: 25,
            height: 54,
            border: "1px dashed",
            borderColor: "grey.100",
            background: "transparent",
            mt: 2,
            ":hover": {
              backgroundColor: "grey.100",
              color: "grey.900",
            },
          }}
          disableElevation
          onClick={handleAddMacro}
        >
          Add Other Macros
        </Button>
      </Box>

      <LoadingButton
        variant={"contained"}
        fullWidth
        sx={{
          color: "grey.100",
          borderRadius: 25,
          height: 54,
          mt: 2,
          "&.Mui-disabled": {
            bgcolor: "primary.main",
          },
        }}
        disableElevation
        type={"submit"}
      >
        Assign Macro
      </LoadingButton>
    </FormProvider>
  );
}
