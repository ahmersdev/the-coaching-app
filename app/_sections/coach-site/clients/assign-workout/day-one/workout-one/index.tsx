import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RHFTextField, RHFUploadFile } from "@/app/_components/react-hook-form";
import { LoadingButton } from "@mui/lab";

export default function WorkoutOne({ control }: any) {
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
          <Typography variant={"h6"} color={"grey.100"} fontWeight={700}>
            Exercise 01
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid container spacing={1}>
            <Grid item xs={12} md={5}>
              <RHFTextField
                name={"exerciseName"}
                label={"Exercise Name"}
                placeholder={"Enter Exercise Name"}
                bgcolor={"secondary.800"}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <RHFTextField
                name={"sets"}
                label={"Sets"}
                placeholder={"Enter Number of Sets"}
                type={"number"}
                bgcolor={"secondary.800"}
              />
            </Grid>
            <Grid item xs={12}>
              reps
            </Grid>
            <Grid item xs={12} md={5}>
              <RHFUploadFile
                name={"video"}
                label={"Workout Video"}
                border={0}
                bgcolor={"secondary.main"}
              />
            </Grid>
            <Grid item xs={0} md={7} />
            <Grid item xs={12} md={5}>
              <RHFTextField
                name={"note"}
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
  );
}
