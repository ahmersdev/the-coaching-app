import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import { successSnackbar } from "@/utils/api";

const validationSchema: any = Yup.object().shape({
  feedback: Yup.string().trim(),
});

const defaultValues = {
  feedback: "",
};

export default function DetailsDialog({
  details,
  showDetails,
  setShowDetails,
}: any) {
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    successSnackbar("Feedback Added Successfully!");
    reset();
    setShowDetails(false);
  };

  return (
    <Dialog
      open={showDetails}
      onClose={() => setShowDetails(false)}
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
            Details
          </Typography>
          <CloseIcon
            sx={{ cursor: "pointer", color: "grey.100" }}
            onClick={() => setShowDetails(false)}
          />
        </Box>
      </DialogTitle>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            {details?.details?.map((item: any, index: any) => (
              <Grid item xs={12} md={6} key={index}>
                <Box borderRight={1} borderColor={"grey.800"}>
                  <Typography
                    variant={"body1"}
                    fontWeight={500}
                    color={"grey.400"}
                  >
                    {Object?.keys?.(item)?.[0]}:
                  </Typography>
                  <Typography variant={"h6"} color={"grey.100"} mt={0.5}>
                    {item[Object?.keys?.(item)?.[0]]}
                  </Typography>
                </Box>
              </Grid>
            ))}

            <Grid item xs={12}>
              <RHFTextField
                name={"feedback"}
                label={"Add Feedback"}
                placeholder={"Add Personal Feedback...."}
                multiline
                rows={3}
                bgcolor={"secondary.800"}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ marginX: 2.4, padding: 0 }}>
          <Button
            variant={"contained"}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              border: "1px dashed",
              borderColor: "grey.100",
              background: "transparent",
              width: 111,
              ":hover": {
                backgroundColor: "grey.100",
                color: "grey.900",
              },
            }}
            disableElevation
            type={"button"}
            onClick={() => setShowDetails(false)}
          >
            Close
          </Button>
          <LoadingButton
            variant={"contained"}
            sx={{
              color: "grey.100",
              width: 111,
              borderRadius: 25,
              border: "1px solid",
              borderColor: "primary.main",
            }}
            disableElevation
            type={"submit"}
          >
            Submit
          </LoadingButton>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
}
