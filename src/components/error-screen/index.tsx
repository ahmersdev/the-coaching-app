import { NotFoundImage } from "@/assets/icons";
import { Box, Button, Typography } from "@mui/material";

export default function ErrorScreen() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"secondary.main"}
      borderRadius={3}
      height={"80vh"}
    >
      <Typography variant={"h1"} color={"error.main"}>
        OOPS! 😖
      </Typography>
      <Typography variant={"h2"} color={"error.main"}>
        Something Went Wrong
      </Typography>
      <Button
        variant={"contained"}
        onClick={handleRefresh}
        sx={{
          color: "grey.100",
          borderRadius: 25,
          width: 164,
          height: 54,
          fontSize: "18px",
          background: "primary.main",
          my: 2,
        }}
      >
        Try Again!
      </Button>
      <NotFoundImage />
    </Box>
  );
}
