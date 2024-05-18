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
import { FormProvider } from "@/components/react-hook-form";
import {
  addFaqDataArray,
  addFaqFormDefaultValues,
  addFaqFormValidationSchema,
} from "./add-faq.data";
import { successSnackbar } from "@/utils/api";

const AddFaq = ({ addFaq, setAddFaq }: any) => {
  const methods: any = useForm({
    resolver: yupResolver(addFaqFormValidationSchema),
    defaultValues: addFaqFormDefaultValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = async (data: any) => {
    successSnackbar("FAQ Added in List Successfully!");
    reset(addFaqFormDefaultValues);
    setAddFaq(false);
  };

  return (
    <Dialog
      open={addFaq}
      onClose={() => setAddFaq(false)}
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
            Add FAQ
          </Typography>
          <CloseIcon
            sx={{ cursor: "pointer", color: "grey.100" }}
            onClick={() => setAddFaq(false)}
          />
        </Box>
      </DialogTitle>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            {addFaqDataArray?.map((item: any) => (
              <Grid item xs={12} key={item?.id}>
                <item.component {...item?.componentProps} size={"small"} />
              </Grid>
            ))}
          </Grid>
        </DialogContent>

        <DialogActions sx={{ marginX: 2.4, padding: 0 }}>
          <Button
            variant={"contained"}
            type={"submit"}
            sx={{
              color: "grey.100",
              borderRadius: 25,
              background: "primary.100",
              ":hover": {
                background: "primary.100",
              },
            }}
            disableElevation
          >
            Add
          </Button>
        </DialogActions>
      </FormProvider>
    </Dialog>
  );
};

export default AddFaq;
