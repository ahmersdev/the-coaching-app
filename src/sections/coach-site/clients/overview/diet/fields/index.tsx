import { useFieldArray } from "react-hook-form";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getAssignDietDataArray } from "@/sections/coach-site/clients/assign-diet.data";

export default function Fields({ control, dayIndex }: any) {
  const { fields: dietField } = useFieldArray({
    control,
    name: `days[${dayIndex}].meals`,
  });

  return (
    <>
      {dietField.map((diet, dietIndex) => (
        <Box bgcolor={"secondary.800"} key={diet.id} borderRadius={3} mt={2}>
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
                <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
                  Meal 0{dietIndex + 1}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={1}>
                {getAssignDietDataArray(dayIndex, dietIndex).map(
                  (item: any) => (
                    <Grid item xs={12} md={item?.md} key={item.id}>
                      <item.component
                        {...item.componentProps}
                        bgcolor={"secondary.800"}
                      />
                    </Grid>
                  )
                )}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </>
  );
}
