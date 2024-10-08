import { COACH_SITE } from "@/constants/routes";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";
import { FormEvent, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function useCheckoutForm() {
  const [isProcessing, setIsProcessing] = useState(false);
  const router: any = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
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
          successSnackbar("Payment Successful!");
          Cookies.remove("clientSecret");
          router.push(COACH_SITE.DASHBOARD);
        } else {
          errorSnackbar("Payment failed. Please try again.");
        }
      } catch (e: any) {
        errorSnackbar(e?.message);
      } finally {
        setIsProcessing(false);
      }
    },
    [elements, router, stripe]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit(event as any);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmit]);

  return { handleSubmit, isProcessing };
}
