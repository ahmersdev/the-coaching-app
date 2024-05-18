import { RHFTextField } from "@/components/react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import { useFieldArray } from "react-hook-form";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Diets({ control, mealIndex }: any) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `dayOneMealAll[${mealIndex}].dayOneMealAllDiets`,
  });

  const handleAddDiet = () => {
    append({ includes: "", quantity: "" });
  };

  const handleRemoveDiet = (dietIndex: any) => {
    remove(dietIndex);
  };

  return (
    <>
      {fields?.map((diet: any, dietIndex: any) => (
        <Grid item xs={12} md={2.5} key={diet.id} position={"relative"}>
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
            name={`dayOneMealAll[${mealIndex}].dayOneMealAllDiets[${dietIndex}].includes`}
            label={"Includes"}
            placeholder={"-----"}
            bgcolor={"secondary.800"}
          />
          <RHFTextField
            name={`dayOneMealAll[${mealIndex}].dayOneMealAllDiets[${dietIndex}].quantity`}
            placeholder={"Enter Quantity"}
            type={"number"}
            bgcolor={"secondary.800"}
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
    </>
  );
}
