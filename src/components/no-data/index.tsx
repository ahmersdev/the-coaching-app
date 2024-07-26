import { NoDataFoundImg } from "@/assets/images";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function NoData({
  image = NoDataFoundImg,
  messagePrimary = "No data found",
  messageSecondary = "",
  children,
  height = "70vh",
}: any) {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      height={height}
    >
      <Grid item textAlign={"center"}>
        <Image src={image} alt={"No Data Found"} width={360} height={360} />
        {messagePrimary && (
          <Typography variant={"h2"} mb={1} color={"grey.100"}>
            {messagePrimary}
          </Typography>
        )}
        {messageSecondary && (
          <Typography variant={"h6"} color={"grey.100"}>
            {messageSecondary}
          </Typography>
        )}
        {children}
      </Grid>
    </Grid>
  );
}
