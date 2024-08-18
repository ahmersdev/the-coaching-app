import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";

export default function SingleImg({
  singleImageView,
  setSingleImageView,
}: any) {
  const theme: any = useTheme();

  return (
    <Dialog
      open={singleImageView?.openSingle}
      onClose={() => setSingleImageView({ open: false, singleImg: null })}
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          bgcolor: "secondary.900",
          padding: 2,
          borderRadius: 5,
          maxWidth: theme.breakpoints.values.md - 100,
          //   maxHeight: "80vh",
        },
      }}
    >
      <DialogTitle>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Typography variant={"h3"} color={"grey.100"}>
            Image View
          </Typography>
          <CloseIcon
            sx={{ cursor: "pointer", color: "grey.100" }}
            onClick={() => setSingleImageView({ open: false, singleImg: null })}
          />
        </Box>
      </DialogTitle>

      <DialogContent>
        <Image
          src={singleImageView?.singleImg}
          alt={"Progress Picture"}
          width={640}
          height={640}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
