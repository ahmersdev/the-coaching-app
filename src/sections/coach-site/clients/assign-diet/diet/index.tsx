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
import useDiet from "./use-diet";
import { getAssignDietDataArray } from "@/sections/coach-site/assign-diet.data";

export default function Diet({
  control,
  dayIndex,
  clientId,
  dietPlanId,
  dietDayId,
}: any) {
  const { dietField, handleAddMeal, handleRemoveMeal } = useDiet({
    control,
    dayIndex,
    clientId,
    dietPlanId,
    dietDayId,
  });

  return (
    <>
      {dietField.map((diet, dietIndex) => (
        <Box bgcolor={"secondary.900"} key={diet.id} borderRadius={3} mt={2}>
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
                  <Typography
                    variant={"h6"}
                    color={"grey.100"}
                    fontWeight={700}
                  >
                    Meal 0{dietIndex + 1}
                  </Typography>
                </Box>
                {dietIndex !== 0 && (
                  <Typography
                    variant={"body1"}
                    color={"grey.100"}
                    fontWeight={900}
                    onClick={() => handleRemoveMeal?.(dietIndex)}
                    mr={2}
                    sx={{ cursor: "pointer" }}
                  >
                    X
                  </Typography>
                )}
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

                <Grid item xs={12}>
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
                    onClick={handleAddMeal}
                  >
                    Add Another Exercise
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </>
  );
}
