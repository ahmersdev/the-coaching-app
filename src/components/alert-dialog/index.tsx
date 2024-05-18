import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { checkDialogTypeForImage } from "./alert-dialog.data";
import CloseIcon from "@mui/icons-material/Close";

const AlertDialog = ({
  message,
  type,
  open,
  handleClose,
  handleCancelBtn = handleClose,
  handleSubmitBtn,
  cancelBtnText = "No",
  submitBtnText = "Yes",
  typeImage,
  loading,
}: any) => {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose?.()}
      fullWidth
      maxWidth={"sm"}
      sx={{
        "& .MuiDialog-paper": {
          bgcolor: "secondary.900",
          p: 1,
          borderRadius: 5,
        },
      }}
    >
      <DialogTitle
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} flexWrap={"wrap"} alignItems={"center"} gap={1}>
          {checkDialogTypeForImage(type) ?? typeImage}
          <Typography
            variant="h3"
            textTransform={"capitalize"}
            color={"grey.100"}
          >
            {type}
          </Typography>
        </Box>
        <CloseIcon
          sx={{ cursor: "pointer", color: "grey.100" }}
          onClick={() => handleClose?.()}
        />
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" color={"grey.100"}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions
        sx={{ "&.MuiDialogActions-root": { padding: "1.5rem !important" } }}
      >
        <Button
          variant="outlined"
          sx={{ color: "grey.100", borderColor: "grey.100" }}
          onClick={() => handleCancelBtn?.()}
        >
          {cancelBtnText}
        </Button>
        <LoadingButton
          loading={loading}
          variant="contained"
          onClick={handleSubmitBtn}
        >
          {submitBtnText}
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
