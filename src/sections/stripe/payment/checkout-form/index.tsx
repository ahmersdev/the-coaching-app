import { AUTH } from "@/constants/routes";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { LoadingButton } from "@mui/lab";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CheckoutForm() {
  const router: any = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window?.location?.origin}/${AUTH.SIGN_IN}`,
        },
      });

      if (error) {
        errorSnackbar(error?.message);
        return;
      }
      successSnackbar("Payment Successful! Login to continue!");
    } catch (e: any) {
      errorSnackbar(e?.message);
    } finally {
      setIsProcessing(false);
    }
  };

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
