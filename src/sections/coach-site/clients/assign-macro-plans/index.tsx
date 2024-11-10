"use client";

import { FormProvider } from "@/components/react-hook-form";
import {
  Box,
  Button,
  Divider,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { ArrowBackIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { LoadingButton } from "@mui/lab";
import { MacroIcon } from "@/assets/icons";
import useAssignMacroPlans from "./use-assign-macro-plans";
import ApiErrorState from "@/components/api-error-state";
import { getMacroPlanOneDataArray } from "@/sections/coach-site/clients/assign-macro.data";

export default function AssignMacroPlans() {
  const {
    methods,
    handleSubmit,
    onSubmit,
    fieldsMacro,
    postMacroStatus,
    isLoading,
    isFetching,
    isError,
  } = useAssignMacroPlans();

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

      {isLoading || isFetching ? (
        <Box bgcolor={"secondary.main"} borderRadius={3} mt={2} p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Skeleton
                variant="rectangular"
                height={48}
                sx={{ bgcolor: "grey.700", borderRadius: 2 }}
              />
            </Grid>
            {[1, 2, 3, 4]?.map((item: any) => (
              <Grid item xs={12} md={3} key={item}>
                <Skeleton
                  variant="rectangular"
                  height={48}
                  sx={{ bgcolor: "grey.700", borderRadius: 2 }}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Skeleton
                variant="rectangular"
                height={68}
                sx={{ bgcolor: "grey.700", borderRadius: 2 }}
              />
            </Grid>
          </Grid>
        </Box>
      ) : isError ? (
        <Box bgcolor={"secondary.main"} borderRadius={3} mt={2}>
          <ApiErrorState />
        </Box>
      ) : (
        <>
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
                <Typography
                  variant={"h6"}
                  color={"grey.100"}
                  fontWeight={700}
                  mb={2}
                >
                  Target Nutrition&rsquo;s
                </Typography>

                <Grid container spacing={2}>
                  {getMacroPlanOneDataArray(macroIndex)?.map((item: any) => (
                    <Grid item xs={12} md={item?.md} key={item.id}>
                      <item.component {...item.componentProps} size={"small"} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
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
            loading={postMacroStatus?.isLoading}
          >
            Assign Macro
          </LoadingButton>
        </>
      )}
    </FormProvider>
  );
}
