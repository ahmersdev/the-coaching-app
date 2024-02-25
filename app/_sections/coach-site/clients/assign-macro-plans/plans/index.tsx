import { MacroIcon } from "@/app/_assets/icons";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { planOneDataArray } from "./plans.data";

export default function Plans({ control }: any) {
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
      >
        Add Other Macros
      </Button>
    </Box>
  );
}
