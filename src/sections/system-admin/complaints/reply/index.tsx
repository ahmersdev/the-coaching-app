import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FormProvider } from "@/components/react-hook-form";
import { RHFTextField } from "@/components/react-hook-form";
import { LoadingButton } from "@mui/lab";
import useReply from "./use-reply";

const Reply = ({ reply, setReply }: any) => {
  const {
    onReplyCloseHandler,
    methods,
    handleSubmit,
    onSubmit,
    updateAdminComplaintsReplyStatus,
  } = useReply({ reply, setReply });

  return (
    <Dialog
      open={reply.open}
      onClose={onReplyCloseHandler}
      fullWidth
      maxWidth={"sm"}
      sx={{
        "& .MuiDialog-paper": {
          bgcolor: "secondary.900",
          paddingBottom: 2,
          borderRadius: 5,
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
            Send Reply
          </Typography>
          <CloseIcon
            sx={{ cursor: "pointer", color: "grey.100" }}
            onClick={onReplyCloseHandler}
          />
        </Box>
      </DialogTitle>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent sx={{ pt: 0 }}>
          <Grid container>
            <Grid item xs={12}>
              <RHFTextField
                name={"reply"}
                label={"Add Reply"}
                placeholder={"Enter your reply"}
                multiline
                minRows={3}
                disabled={reply?.data?.reply}
              />
            </Grid>
          </Grid>
        </DialogContent>

        {!!!reply?.data?.reply && (
          <DialogActions sx={{ marginX: 2.4, padding: 0 }}>
            <LoadingButton
              variant={"contained"}
              type={"submit"}
              sx={{
                color: "grey.100",
                width: 132,
                borderRadius: 25,
                border: "1px solid",
                borderColor: "primary.main",
                "&.Mui-disabled": {
                  bgcolor: "primary.main",
                },
              }}
              disableElevation
              loading={updateAdminComplaintsReplyStatus?.isLoading}
            >
              Reply
            </LoadingButton>
          </DialogActions>
        )}
      </FormProvider>
    </Dialog>
  );
};

export default Reply;
