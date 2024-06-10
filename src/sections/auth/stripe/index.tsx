"use client";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ShortLogoIcon, StripPremiumPlan } from "@/assets/icons";
import { PricingList } from "./stripe.data";
import { pxToRem } from "@/utils/get-font-value";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { LoadingButton } from "@mui/lab";
import { useRouter, useSearchParams } from "next/navigation";
import {
  usePostCreateStripeCustomerMutation,
  useUpdateStripeIdMutation,
} from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { STRIPE_URL } from "@/config";

export default function Stripe() {
  const router: any = useRouter();

  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  const name = searchParams.get("name");

  const [postCreateStripeCustomerTrigger, postCreateStripeCustomerStatus] =
    usePostCreateStripeCustomerMutation();

  const [updateStripeIdTrigger, updateStripeIdStatus] =
    useUpdateStripeIdMutation();

  const stripeHandler = async () => {
    const updatedData = {
      email,
      name,
    };
    try {
      const response = await postCreateStripeCustomerTrigger(
        updatedData
      ).unwrap();
      if (response) {
        const stripeData = { stripe_id: response?.id, user_email: email };
        try {
          await updateStripeIdTrigger(stripeData).unwrap();
          successSnackbar("Please Make Payment!");
          router.push(STRIPE_URL);
        } catch (e: any) {
          errorSnackbar(e?.data?.message);
        }
      }
    } catch (error: any) {
      errorSnackbar(error?.data?.message);
    }
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
      p={2}
      gap={3}
    >
      <ShortLogoIcon />

      <Box
        borderRadius={4}
        border={"1px solid"}
        borderColor={"primary.main"}
        p={4}
        bgcolor={"common.stripe"}
        maxWidth={400}
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={3}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={1}
        >
          <StripPremiumPlan />

          <Typography variant={"h6"} color={"text.100"} fontWeight={700}>
            Premium Plan
          </Typography>
          <Typography variant={"h4"} color={"text.100"} fontWeight={900}>
            $12.99
          </Typography>
        </Box>

        <List>
          {PricingList?.map((item: any, index: any) => (
            <ListItem sx={{ pl: 0 }} key={index}>
              <ListItemIcon sx={{ minWidth: pxToRem(30) }}>
                <CheckCircleIcon sx={{ color: "success.main" }} />
              </ListItemIcon>
              <ListItemText
                primary={item}
                sx={{
                  color: "text.100",
                  ".MuiTypography-root": {
                    fontSize: pxToRem(16),
                  },
                }}
              />
            </ListItem>
          ))}
        </List>

        <LoadingButton
          variant={"contained"}
          fullWidth
          sx={{
            color: "grey.100",
            borderRadius: 25,
            border: "1px solid",
            borderColor: "primary.main",
            "&.Mui-disabled": {
              bgcolor: "primary.main",
            },
          }}
          disableElevation
          type={"button"}
          onClick={stripeHandler}
          loading={
            postCreateStripeCustomerStatus?.isLoading ||
            updateStripeIdStatus?.isLoading
          }
        >
          Buy Now
        </LoadingButton>
      </Box>
    </Box>
  );
}
