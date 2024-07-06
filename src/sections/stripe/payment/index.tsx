"use client";

import { STRIPE_PUBLIC_KEY } from "@/config";
import { Box } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkout-form";
import { SkeletonForm } from "@/components/skeletons";
import usePayment from "./use-payment";

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default function Payment() {
  const { isLoading, isFetching, clientSecret, appearance } = usePayment();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
      p={2}
    >
      <Box
        borderRadius={4}
        border={"1px solid"}
        borderColor={"primary.main"}
        p={4}
        bgcolor={"common.stripe"}
        maxWidth={500}
        width={"100%"}
      >
        {isLoading || isFetching || !!!stripePromise || !!!clientSecret ? (
          <SkeletonForm />
        ) : (
          <Elements
            stripe={stripePromise}
            options={{ clientSecret, appearance }}
          >
            <CheckoutForm />
          </Elements>
        )}
      </Box>
    </Box>
  );
}
