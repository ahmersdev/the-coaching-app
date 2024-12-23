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
import { useLazyGetFoodListSearchQuery } from "@/services/coach-site/clients";

export default function MealItemFields({ control, dayIndex, mealIndex }: any) {
  const { fields: mealItemField } = useFieldArray({
    control,
    name: `days[${dayIndex}].meals[${mealIndex}].items`,
  });

  const apiQueryFood = useLazyGetFoodListSearchQuery();

  return (
    <>
      {mealItemField.map((mealItem, mealItemIndex) => (
        <Box
          bgcolor={"secondary.700"}
          key={mealItem.id}
          borderRadius={3}
          mt={2}
        >
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
                <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
                  Meal Item {mealItemIndex + 1}
                </Typography>
              </Box>
            </AccordionSummary>

            <AccordionDetails>
              <Grid container spacing={1}>
                {getAssignDietDataArray(
                  dayIndex,
                  mealIndex,
                  mealItemIndex,
                  apiQueryFood
                ).map((item: any) => (
                  <Grid item xs={12} md={item?.md} key={item.id}>
                    <item.component
                      {...item.componentProps}
                      bgcolor={"secondary.800"}
                      disabled
                    />
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </>
  );
}
