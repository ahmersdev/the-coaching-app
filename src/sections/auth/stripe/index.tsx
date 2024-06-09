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
import { useRouter } from "next/navigation";

export default function Stripe() {
  const router: any = useRouter();

  const stripeHandler = () => {
    router.push("https://buy.stripe.com/test_00g3dY2nW3k88FO288");
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
          }}
          disableElevation
          type={"button"}
          onClick={stripeHandler}
        >
          Buy Now
        </LoadingButton>
      </Box>
    </Box>
  );
}
