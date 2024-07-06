import { AUTH } from "@/constants/routes";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Cookies from "js-cookie";

export default function useCheckoutForm() {
  const [isProcessing, setIsProcessing] = useState(false);
  const router: any = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) {
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {},
        redirect: "if_required",
      });

      if (error) {
        errorSnackbar(error?.message);
        return;
      }
      if (paymentIntent?.status === "succeeded") {
        successSnackbar("Payment Successful! Login to continue!");
        Cookies.remove("clientSecret");
        router.push(AUTH.SIGN_IN);
      } else {
        errorSnackbar("Payment failed. Please try again.");
      }
    } catch (e: any) {
      errorSnackbar(e?.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return { handleSubmit, isProcessing };
}
