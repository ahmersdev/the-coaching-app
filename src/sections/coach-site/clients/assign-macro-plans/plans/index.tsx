import { MacroIcon } from "@/assets/icons";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { planOneDataArray } from "./plans.data";
import { useFieldArray } from "react-hook-form";
import { RHFTextField } from "@/components/react-hook-form";
import RHFAutocomplete from "@/components/react-hook-form/rhf-autocomplete";

export default function Plans({ control }: any) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "macros",
  });

  const handleAddMacro = () => {
    append({ proteins: "", carbs: "", fat: "", type: "", note: "" });
  };

  const handleRemoveMacro = (macroIndex: any) => {
    remove(macroIndex);
  };

  return (
    <Box my={2} bgcolor={"secondary.main"} borderRadius={3} p={2}>
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <MacroIcon />
        <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
          Target Macro&rsquo;s
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box bgcolor={"secondary.900"} borderRadius={3} p={1}>
        <Typography variant={"h6"} color={"grey.100"} fontWeight={700} mb={2}>
          Target Nutrition&rsquo;s
        </Typography>
        <Grid container spacing={2}>
          {planOneDataArray?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component {...item?.componentProps} size={"small"} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {fields?.map((macro: any, macroIndex: any) => (
        <Box
          bgcolor={"secondary.900"}
          borderRadius={3}
          p={1}
          my={2}
          key={macro?.id}
        >
          <Typography variant={"h6"} color={"grey.100"} fontWeight={700} mb={2}>
            Target Nutrition&rsquo;s
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <RHFTextField
                name={`macros[${macroIndex}].proteins`}
                label={"Proteins"}
                placeholder={"Enter proteins in gram"}
                bgcolor={"secondary.800"}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <RHFTextField
                name={`macros[${macroIndex}].carbs`}
                label={"Carbs"}
                placeholder={"Enter carbs in gram"}
                bgcolor={"secondary.800"}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <RHFTextField
                name={`macros[${macroIndex}].fat`}
                label={"Fat"}
                placeholder={"Enter fat in gram"}
                bgcolor={"secondary.800"}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <RHFAutocomplete
                name={`macros[${macroIndex}].type`}
                label={"Macro Type"}
                placeholder={"Select type"}
                bgcolor={"secondary.800"}
                options={["High", "Medium", "Low"]}
              />
            </Grid>
            <Grid item xs={12}>
              <RHFTextField
                name={`macros[${macroIndex}].note`}
                label={"Add Note"}
                placeholder={"Add Some Details"}
                bgcolor={"secondary.800"}
                multiline
                rows={3}
              />
            </Grid>
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
  );
}
