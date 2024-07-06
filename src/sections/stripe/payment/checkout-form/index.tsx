import { LoadingButton } from "@mui/lab";
import { PaymentElement } from "@stripe/react-stripe-js";
import useCheckoutForm from "./use-checkout-form";

export default function CheckoutForm() {
  const { handleSubmit, isProcessing } = useCheckoutForm();

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />

      <LoadingButton
        variant={"contained"}
        fullWidth
        sx={{
          color: "grey.100",
          borderRadius: 25,
          border: "1px solid",
          borderColor: "primary.main",
          mt: 3,
          "&.Mui-disabled": {
            bgcolor: "primary.main",
          },
        }}
        disableElevation
        type={"submit"}
        loading={isProcessing}
      >
        {isProcessing ? "Processing..." : "Pay"}
      </LoadingButton>
    </form>
  );
}
