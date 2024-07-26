import { PaymentMethodDetailsIcon } from "@/assets/icons";
import NoData from "@/components/no-data";
import { Box, Divider, Typography } from "@mui/material";

export default function PaymentMethods() {
  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"flex-end"} gap={1}>
        <PaymentMethodDetailsIcon />
        <Typography variant={"h6"} fontWeight={700} color={"grey.100"} mb={1}>
          Your Payment Card Details
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <NoData
        messagePrimary={"No Card Added Yet!"}
        messageSecondary={
          "You do not any card to pay your subscription payments! Please Add Card."
        }
      />
    </Box>
  );
}
