import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { MealIcon } from "@/app/_assets/icons";
import { RHFTextField } from "@/app/_components/react-hook-form";
import { useFieldArray } from "react-hook-form";

export default function MealOne({ control, dayIndex }: any) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "diets",
  });

  const handleAddDiet = () => {
    append({});
  };

  const handleRemoveDiet = (dietIndex: any) => {
    remove(dietIndex);
  };

  return (
    <Box bgcolor={"secondary.900"} borderRadius={3} mt={2}>
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
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <MealIcon />
            <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
              Meal 01
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <RHFTextField
                name={`days[${dayIndex}].mealName`}
                label={"Meal Name"}
                placeholder={"Enter Meal Name"}
              />
            </Grid>
            <Grid item xs={0} md={12} />
            <Grid item xs={12}>
              <Grid container spacing={1} alignItems={"end"}>
                <Grid item xs={12} md={3}>
                  <RHFTextField
                    name={`days[${dayIndex}].includes`}
                    label={"Includes"}
                    placeholder={"-----"}
                  />
                  <RHFTextField
                    name={`days[${dayIndex}].quantity`}
                    placeholder={"Enter Quantity"}
                    type={"number"}
                  />
                </Grid>
                {fields?.map((diet: any, dietIndex: number) => (
                  <Grid item xs={12} md={3} key={diet.id} position={"relative"}>
                    <Typography
                      variant={"body1"}
                      color={"grey.100"}
                      fontWeight={900}
                      onClick={() => handleRemoveDiet(dietIndex)}
                      sx={{ cursor: "pointer" }}
                      position={"absolute"}
                      right={5}
                    >
                      X
                    </Typography>
                    <RHFTextField
                      name={`days[${dayIndex}].diets[${dietIndex}].includes`}
                      label={"Includes"}
                      placeholder={"-----"}
                    />
                    <RHFTextField
                      name={`days[${dayIndex}].diets[${dietIndex}].quantity`}
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
                    mt: 1,
                    ":hover": {
                      backgroundColor: "grey.100",
                      color: "grey.900",
                    },
                  }}
                  disableElevation
                  onClick={handleAddDiet}
                >
                  Add
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <RHFTextField
                name={`days[${dayIndex}].note`}
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
  );
}
