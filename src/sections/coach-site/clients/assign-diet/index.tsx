"use client";

import { FormProvider } from "@/components/react-hook-form";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
  Button,
  Grid,
  Skeleton,
} from "@mui/material";
import Link from "next/link";
import { COACH_SITE } from "@/constants/routes";
import { ArrowBackIcon, DietDayIcon } from "@/assets/icons";
import { LoadingButton } from "@mui/lab";
import useAssignDiet from "./use-assign-diet";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Diet from "./diet";
import ApiErrorState from "@/components/api-error-state";

export default function AssignDiet() {
  const {
    methods,
    control,
    handleSubmit,
    onSubmit,
    daysField,
    handleRemoveDay,
    handleAddDay,
    postDietStatus,
    isLoading,
    isFetching,
    isError,
    clientId,
    dietPlanId,
  } = useAssignDiet();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Link href={COACH_SITE?.CLIENTS}>
          <ArrowBackIcon />
        </Link>
        <Typography variant={"h3"} fontWeight={600}>
          Assign Diet
        </Typography>
      </Box>

      {isLoading || isFetching ? (
        <Box bgcolor={"secondary.main"} borderRadius={3} mt={2} p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Skeleton
                variant="rectangular"
                height={68}
                sx={{ bgcolor: "grey.700", borderRadius: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Skeleton
                variant="rectangular"
                height={58}
                sx={{ bgcolor: "grey.700", borderRadius: 2 }}
              />
            </Grid>
            {[1, 2, 3, 4, 5]?.map((item: any) => (
              <Grid item xs={12} sm={6} key={item}>
                <Skeleton
                  variant="rectangular"
                  height={48}
                  sx={{ bgcolor: "grey.700", borderRadius: 2 }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : isError ? (
        <Box bgcolor={"secondary.main"} borderRadius={3} mt={2}>
          <ApiErrorState />
        </Box>
      ) : (
        <>
          {daysField?.map((day: any, dayIndex) => (
            <Box
              bgcolor={"secondary.main"}
              borderRadius={3}
              mt={2}
              key={day.id}
            >
              <Accordion
                elevation={0}
                defaultExpanded
                sx={{
                  bgcolor: "transparent",
                  p: 1,
                  "&.Mui-expanded": {
                    margin: 0,
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "grey.100" }} />}
                >
                  <Box
                    width={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    gap={1}
                  >
                    <Box display={"flex"} alignItems={"center"} gap={1}>
                      <DietDayIcon />
                      <Typography
                        variant={"h6"}
                        color={"grey.100"}
                        fontWeight={700}
                      >
                        Day 0{dayIndex + 1}
                      </Typography>
                    </Box>
                    {dayIndex !== 0 && (
                      <Typography
                        variant={"body1"}
                        color={"grey.100"}
                        fontWeight={900}
                        onClick={() => handleRemoveDay?.(dayIndex)}
                        mr={2}
                        sx={{ cursor: "pointer" }}
                      >
                        X
                      </Typography>
                    )}
                  </Box>
                </AccordionSummary>

                <AccordionDetails>
                  <Divider sx={{ mb: 2 }} />
                  <Diet
                    control={control}
                    dayIndex={dayIndex}
                    clientId={clientId}
                    dietPlanId={dietPlanId}
                    dietDayId={day?.diet_day_id}
                  />
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
        </>
      )}

      {isLoading ||
        isFetching ||
        (!isError && (
          <>
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
                "&.Mui-disabled": {
                  background: "transparent",
                },
                ":hover": {
                  backgroundColor: "grey.100",
                  color: "grey.900",
                },
              }}
              disableElevation
              onClick={handleAddDay}
              disabled={postDietStatus?.isLoading}
            >
              Add Diet For Another Day
            </Button>

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
              loading={postDietStatus?.isLoading}
            >
              Assign Diet
            </LoadingButton>
          </>
        ))}
    </FormProvider>
  );
}
