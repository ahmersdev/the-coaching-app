"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enqueueSnackbar } from "notistack";
import { FormProvider, RHFTextField } from "@/app/_components/react-hook-form";
import {
  Accordion,
  Box,
  Divider,
  Typography,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
} from "@mui/material";
import Link from "next/link";
import { COACH_SITE } from "@/app/_constants/routes";
import { ArrowBackIcon, DietDayIcon, MealIcon } from "@/app/_assets/icons";
import { LoadingButton } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import * as Yup from "yup";

const dietValidationSchema: any = Yup?.object()?.shape({
  mealName: Yup?.string()?.trim()?.required("Required"),
  includes: Yup?.string()?.trim()?.required("Required"),
  quantity: Yup?.string()?.required("Required"),
  note: Yup?.string()?.required("Required"),
});

const dietFormDefaultValues: any = {
  mealName: "",
  includes: "",
  quantity: "",
  note: "",
};

export default function AssignDiet() {
  const methods: any = useForm({
    resolver: yupResolver(dietValidationSchema),
    defaultValues: dietFormDefaultValues,
  });

  const { handleSubmit, reset, control } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "meals",
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    enqueueSnackbar("Diet Added Successfully!", {
      variant: "success",
    });
    reset(dietFormDefaultValues);
  };

  const handleAddMeal = () => {
    append({ includes: "", quantity: "" });
  };

  const handleRemoveMeal = (index: any) => {
    remove(index);
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
          <Link href={COACH_SITE?.CLIENTS_ALERTS}>
            <ArrowBackIcon />
          </Link>
          <Typography variant={"h3"} fontWeight={600}>
            Overview
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

      <Box bgcolor={"secondary.main"} borderRadius={3} mt={2}>
        <Accordion
          elevation={0}
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
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <DietDayIcon />
              <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
                Day 01
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            {/* Child Accordion */}
            <Divider sx={{ mb: 2 }} />
            <Box bgcolor={"secondary.900"} borderRadius={3} mt={2}>
              <Accordion
                elevation={0}
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
                  <Box display={"flex"} alignItems={"center"} gap={1}>
                    <MealIcon />
                    <Typography
                      variant={"h6"}
                      color={"grey.100"}
                      fontWeight={700}
                    >
                      Meal 01
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <RHFTextField
                        name={"mealName"}
                        label={"Meal Name"}
                        placeholder={"Enter Meal Name"}
                      />
                    </Grid>
                    <Grid item xs={0} md={12} />
                    <Grid item xs={12}>
                      <Grid container spacing={1} alignItems={"end"}>
                        <Grid item xs={12} md={3}>
                          <RHFTextField
                            name={`includes`}
                            label={"Includes"}
                            placeholder={"-----"}
                          />
                          <RHFTextField
                            name={`quantity`}
                            placeholder={"Enter Quantity"}
                            type={"number"}
                          />
                        </Grid>
                        {fields?.map((meal: any, index: number) => (
                          <Grid
                            item
                            xs={12}
                            md={3}
                            key={meal.id}
                            position={"relative"}
                          >
                            <Typography
                              variant={"body1"}
                              color={"grey.100"}
                              fontWeight={900}
                              onClick={() => handleRemoveMeal(index)}
                              sx={{ cursor: "pointer" }}
                              position={"absolute"}
                              right={5}
                            >
                              X
                            </Typography>
                            <RHFTextField
                              name={`meals[${index}].includes`}
                              label={"Includes"}
                              placeholder={"-----"}
                            />
                            <RHFTextField
                              name={`meals[${index}].quantity`}
                              placeholder={"Enter Quantity"}
                              type={"number"}
                            />
                          </Grid>
                        ))}

                        <Button
                          variant={"contained"}
                          startIcon={<AddCircleIcon />}
                          sx={{
                            color: "grey.100",
                            borderRadius: 25,
                            height: 36,
                            width: 90,
                            border: "1px dashed",
                            borderColor: "grey.100",
                            background: "transparent",
                            ml: 1,
                            ":hover": {
                              backgroundColor: "grey.100",
                              color: "grey.900",
                            },
                          }}
                          disableElevation
                          onClick={handleAddMeal}
                        >
                          Add
                        </Button>
                      </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <RHFTextField
                        name={"note"}
                        label={"Add Note"}
                        placeholder={"Add Some Details"}
                        multiline
                        rows={3}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant={"contained"}
                        sx={{
                          color: "grey.100",
                          width: 132,
                          borderRadius: 25,
                          border: "1px solid",
                          borderColor: "primary.main",
                        }}
                        disableElevation
                      >
                        Add Meal
                      </Button>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Box>

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
            >
              Add Another Meal
            </Button>
          </AccordionDetails>
        </Accordion>
      </Box>
    </FormProvider>
  );
}
