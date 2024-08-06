import { ApiErrorStateIcon } from "@/assets/icons";
import { Box, Typography } from "@mui/material";

const ApiErrorState = (props: any) => {
  const {
    height = "50vh",
    textColor = "grey.100",
    message = "Something Went Wrong!",
    children,
  } = props;
  return (
    <Box
      height={height}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        display={"grid"}
        sx={{
          placeItems: "center",
          placeContent: "center",
        }}
      >
        <ApiErrorStateIcon />
      </Box>
      <Typography variant={"h2"} color={textColor} mt={2}>
        {message}
      </Typography>
      <br />
      {children}
    </Box>
  );
};

export default ApiErrorState;
