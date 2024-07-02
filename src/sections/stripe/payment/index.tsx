"use client";

import { STRIPE_PUBLIC_KEY } from "@/config";
import { Box, useTheme } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useGetClientSecretQuery } from "@/services/stripe";
import { useSearchParams } from "next/navigation";
import CheckoutForm from "./checkout-form";
import { SkeletonForm } from "@/components/skeletons";

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default function Payment() {
  const theme: any = useTheme();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const params = { email };

  const { data, isLoading, isFetching } = useGetClientSecretQuery(params);

  const appearance: any = {
    theme: "flat",
    variables: {
      colorPrimary: theme.palette.primary.main,
      colorBackground: theme.palette.secondary[900],
      colorText: theme.palette.grey[100],
    },
    rules: {
      ".Input": {
        border: 1.5,
        borderColor: theme.palette.secondary[600],
        backgroundColor: theme.palette.secondary[900],
        color: theme.palette.grey[100],
      },
      ".Input:focus": {
        borderColor: theme.palette.primary.main,
      },
    },
  };

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
        {isLoading ||
        isFetching ||
        !!!stripePromise ||
        !!!data?.client_secret ? (
          <SkeletonForm />
        ) : (
          <Elements
            stripe={stripePromise}
            options={{ clientSecret: data?.client_secret, appearance }}
          >
            <CheckoutForm />
          </Elements>
        )}
      </Box>
    </Box>
  );
}
