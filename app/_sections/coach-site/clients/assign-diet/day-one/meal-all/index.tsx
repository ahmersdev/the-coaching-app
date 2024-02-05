import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { MealIcon } from "@/app/_assets/icons";
import { RHFTextField } from "@/app/_components/react-hook-form";
import { useState } from "react";
import { useFieldArray } from "react-hook-form";

export default function MealAll({ control }: any) {
  const {
    fields: fieldsMeals,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "meals",
  });

  const [diets, setDiets] = useState<any>([]);

  const handleAddMeals = () => {
    append({});
  };

  const handleRemoveMeals = (mealIndex: any) => {
    remove(mealIndex);
  };

  const handleAddMealsDiet = (mealIndex: any) => {
    const updatedMeals: any = [...diets];
    updatedMeals[mealIndex] = {
      ...updatedMeals[mealIndex],
      mealDiet: [...(updatedMeals[mealIndex]?.mealDiet || []), {}],
    };
    setDiets(updatedMeals);
  };

  const handleRemoveMealsDiet = (mealIndex: any, dietIndex: any) => {
    const updatedMeals: any = [...diets];
    updatedMeals[mealIndex] = {
      ...updatedMeals[mealIndex],
      mealDiet: updatedMeals[mealIndex]?.mealDiet?.filter(
        (_: any, index: any) => index !== dietIndex
      ),
    };
    setDiets(updatedMeals);
  };

  return (
    <>
      {fieldsMeals?.map((meal: any, mealIndex: any) => (
        <Box bgcolor={"secondary.900"} key={meal?.id} borderRadius={3} mt={2}>
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
              <Box
                width={"100%"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={1}
              >
                <Box display={"flex"} alignItems={"center"} gap={1}>
                  <MealIcon />
                  <Typography
                    variant={"h6"}
                    color={"grey.100"}
                    fontWeight={700}
                  >
                    Meal 0{mealIndex + 2}
                  </Typography>
                </Box>
                <Typography
                  variant={"body1"}
                  color={"grey.100"}
                  fontWeight={900}
                  onClick={() => handleRemoveMeals?.(mealIndex)}
                  mr={2}
                  sx={{ cursor: "pointer" }}
                >
                  X
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                  <RHFTextField
                    name={`meals[${mealIndex}].mealName`}
                    label={"Meal Name"}
                    placeholder={"Enter Meal Name"}
                  />
                </Grid>
                <Grid item xs={0} md={12} />
                <Grid item xs={12}>
                  <Grid container spacing={1} alignItems={"end"}>
                    <Grid item xs={12} md={3}>
                      <RHFTextField
                        name={`meals[${mealIndex}].includes`}
                        label={"Includes"}
                        placeholder={"-----"}
                      />
                      <RHFTextField
                        name={`meals[${mealIndex}].quantity`}
                        placeholder={"Enter Quantity"}
                        type={"number"}
                      />
                    </Grid>

                    {diets[mealIndex]?.mealDiet &&
                      diets[mealIndex]?.mealDiet?.map(
                        (diet: any, dietIndex: any) => (
                          <Grid
                            item
                            xs={12}
                            md={3}
                            key={diet.id}
                            position={"relative"}
                          >
                            <Typography
                              variant={"body1"}
                              color={"grey.100"}
                              fontWeight={900}
                              onClick={() =>
                                handleRemoveMealsDiet(mealIndex, dietIndex)
                              }
                              sx={{ cursor: "pointer" }}
                              position={"absolute"}
                              right={5}
                            >
                              X
                            </Typography>
                            <RHFTextField
                              name={`meals[${mealIndex}].diets[${dietIndex}].includes`}
                              label={"Includes"}
                              placeholder={"-----"}
                            />
                            <RHFTextField
                              name={`meals[${mealIndex}].diets[${dietIndex}].quantity`}
                              placeholder={"Enter Quantity"}
                              type={"number"}
                            />
                          </Grid>
                        )
                      )}

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
                        mt: 1,
                        ":hover": {
                          backgroundColor: "grey.100",
                          color: "grey.900",
                        },
                      }}
                      disableElevation
                      onClick={() => handleAddMealsDiet(mealIndex)}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>

                <Grid item xs={12} md={6}>
                  <RHFTextField
                    name={`meals[${mealIndex}].note`}
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
                    type={"submit"}
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
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
        onClick={handleAddMeals}
      >
        Add Another Meal
      </Button>
    </>
  );
}
