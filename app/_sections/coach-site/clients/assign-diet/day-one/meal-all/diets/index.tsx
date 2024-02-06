import { RHFTextField } from "@/app/_components/react-hook-form";
import { Button, Grid, Typography } from "@mui/material";
import { useFieldArray } from "react-hook-form";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Diets({ control, mealIndex }: any) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `meals[${mealIndex}].diets`,
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
