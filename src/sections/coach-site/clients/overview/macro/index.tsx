import { MacroIcon } from "@/assets/icons";
import { COACH_SITE } from "@/constants/routes";
import { AddCircle } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { getMacroPlanOneDataArray } from "@/sections/coach-site/clients/assign-macro.data";
import { FormProvider } from "@/components/react-hook-form";
import useMacro from "./use-macro";

export default function Macro({ macroPlans, clientId }: any) {
  const { methods, fieldsMacro } = useMacro(macroPlans);

  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={1}
      >
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <MacroIcon />
          <Typography variant={"h6"} fontWeight={700}>
            Target Macro&rsquo;s
          </Typography>
        </Box>
        <Link
          href={{
            pathname: COACH_SITE.CLIENTS_ASSIGN_MACRO_PLANS,
            query: { clientId },
          }}
        >
          <Button
            variant={"contained"}
            startIcon={<AddCircle />}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              border: "1px dashed",
              borderColor: "grey.100",
              background: "transparent",
              ":hover": {
                backgroundColor: "grey.100",
                color: "grey.900",
              },
            }}
            disableElevation
          >
            Assign
          </Button>
        </Link>
      </Box>

      <Divider sx={{ my: 2 }} />

      {!!!macroPlans?.length ? (
        <Typography
          variant={"body1"}
          textAlign={"center"}
          color={"grey.500"}
          py={2}
        >
          No Macro&rsquo;s Assign Yet
        </Typography>
      ) : (
        <FormProvider methods={methods}>
          <Box my={2} bgcolor={"secondary.900"} borderRadius={3} p={2}>
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <MacroIcon />
              <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
                Target Macro&rsquo;s
              </Typography>
            </Box>
            <Divider sx={{ my: 2 }} />

            {fieldsMacro?.map((macro: any, macroIndex: any) => (
              <Box
                bgcolor={"secondary.800"}
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
                      <item.component
                        {...item.componentProps}
                        size={"small"}
                        disabled
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </Box>
        </FormProvider>
      )}
    </Box>
  );
}
