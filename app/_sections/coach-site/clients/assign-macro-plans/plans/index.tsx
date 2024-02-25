import { MacroIcon } from "@/app/_assets/icons";
import { Box, Divider, Typography } from "@mui/material";

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
      Form
    </Box>
  );
}
