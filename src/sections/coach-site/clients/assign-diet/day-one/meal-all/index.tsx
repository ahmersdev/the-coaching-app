import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { RHFTextField } from "@/components/react-hook-form";
import { useFieldArray } from "react-hook-form";
import Diets from "./diets";
import { CoachesMealImg } from "@/assets/images";
import { LoadingButton } from "@mui/lab";

export default function MealAll({ control }: any) {
  const {
    fields: fieldsMeals,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "dayOneMealAll",
  });

  const handleAddMeals = () => {
    append({
      mealName: "",
      includes: "",
      quantity: "",
      note: "",
    });
  };

  const handleRemoveMeals = (mealIndex: any) => {
    remove(mealIndex);
  };

  return (
    <>
      {fieldsMeals?.map((meal: any, mealIndex: any) => (
        <Box bgcolor={"secondary.900"} key={meal.id} borderRadius={3} mt={2}>
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
                  <Avatar
                    src={CoachesMealImg?.src}
                    alt={"Meal"}
                    variant={"rounded"}
                    sx={{ width: 52, height: 52 }}
                  />
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
                <Grid item xs={12} md={5}>
                  <RHFTextField
                    name={`dayOneMealAll[${mealIndex}].mealName`}
                    label={"Meal Name"}
                    placeholder={"Enter Meal Name"}
                    bgcolor={"secondary.800"}
                  />
                </Grid>
                <Grid item xs={0} md={7} />
                <Grid item xs={12}>
                  <Grid container spacing={1} alignItems={"end"}>
                    <Grid item xs={12} md={2.5}>
                      <RHFTextField
                        name={`dayOneMealAll[${mealIndex}].includes`}
                        label={"Includes"}
                        placeholder={"-----"}
                        bgcolor={"secondary.800"}
                      />
                      <RHFTextField
                        name={`dayOneMealAll[${mealIndex}].quantity`}
                        placeholder={"Enter Quantity"}
                        type={"number"}
                        bgcolor={"secondary.800"}
                      />
                    </Grid>

                    <Diets control={control} mealIndex={mealIndex} />
                  </Grid>
                </Grid>

                <Grid item xs={12} md={5}>
                  <RHFTextField
                    name={`dayOneMealAll[${mealIndex}].note`}
                    label={"Add Note"}
                    placeholder={"Add Some Details"}
                    multiline
                    rows={3}
                    bgcolor={"secondary.800"}
                  />
                </Grid>
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
                    Add
                  </LoadingButton>
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
