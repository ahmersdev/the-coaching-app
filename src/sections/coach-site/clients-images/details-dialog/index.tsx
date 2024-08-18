import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import { successSnackbar } from "@/utils/api";
import { detailsDataArray, questionsList } from "./details-dialog.data";
import { pxToRem } from "@/utils/get-font-value";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const validationSchema: any = Yup.object().shape({
  feedback: Yup.string().trim(),
});

const defaultValues = {
  feedback: "",
};

export default function DetailsDialog({ showDetails, setShowDetails }: any) {
  const theme: any = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    successSnackbar("Feedback Added Successfully!");
    reset();
    setShowDetails({ open: false, details: null });
  };

  const detailsData = detailsDataArray(showDetails.details);

  return (
    <Dialog
      open={showDetails?.open}
      onClose={() => setShowDetails({ open: false, details: null })}
      fullWidth
      sx={{
        "& .MuiDialog-paper": {
          bgcolor: "secondary.900",
          paddingBottom: 2,
          borderRadius: 5,
          maxWidth: theme.breakpoints.values.md - 100,
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
            Progress Details
          </Typography>
          <CloseIcon
            sx={{ cursor: "pointer", color: "grey.100" }}
            onClick={() => setShowDetails({ open: false, details: null })}
          />
        </Box>
      </DialogTitle>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            {Object?.entries(detailsData)?.map(([key, value], index, array) => (
              <Grid item xs={12} sm={6} key={key}>
                <Box
                  borderRight={index !== array.length - 1 ? 1 : 0}
                  borderColor={"grey.800"}
                  mr={5}
                >
                  <Typography
                    variant={"body1"}
                    fontWeight={500}
                    color={"grey.400"}
                  >
                    {key}:
                  </Typography>
                  <Typography variant={"h6"} color={"grey.100"} mt={0.5}>
                    {value} inches
                  </Typography>
                </Box>
              </Grid>
            ))}

            <Grid item xs={12}>
              Images
            </Grid>

            <Grid item xs={12}>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography variant={"h6"} color={"grey.100"}>
                  Client Question:
                </Typography>

                <List sx={{ pt: 0 }}>
                  {questionsList?.map((item: any, index: any) => (
                    <ListItem sx={{ pl: 0 }} key={index}>
                      <ListItemIcon sx={{ minWidth: pxToRem(20) }}>
                        <FiberManualRecordIcon
                          sx={{ color: "grey.400", fontSize: pxToRem(10) }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        sx={{
                          color: "grey.400",
                          ".MuiTypography-root": {
                            fontSize: pxToRem(14),
                          },
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>

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
            onClick={() => setShowDetails({ open: false, details: null })}
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
