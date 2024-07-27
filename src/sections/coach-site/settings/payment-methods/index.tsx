import { CardChipIcon, PaymentMethodDetailsIcon } from "@/assets/icons";
import { CardWorldMapImg } from "@/assets/images";
import NoData from "@/components/no-data";
import { Box, Divider, Skeleton, Typography } from "@mui/material";
import usePaymentMethods from "./use-payment-methods";

export default function PaymentMethods() {
  const {
    isLoading,
    isFetching,
    initialLoading,
    isError,
    data,
    transformedMonth,
    cardBrandIcon,
  } = usePaymentMethods();

  return (
    <Box bgcolor={"secondary.main"} p={2.4} borderRadius={3}>
      <Box display={"flex"} alignItems={"flex-end"} gap={1}>
        <PaymentMethodDetailsIcon />
        <Typography variant={"h6"} fontWeight={700} color={"grey.100"} mb={1}>
          Your Payment Card Details
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box height={"70vh"}>
        {isLoading || isFetching || initialLoading ? (
          <Skeleton />
        ) : isError ? (
          <>Error</>
        ) : (
          <>
            {!data?.payment_method ? (
              <NoData
                messagePrimary={"No Card Added Yet!"}
                messageSecondary={
                  "You do not any card to pay your subscription payments! Please Add Card."
                }
              />
            ) : (
              <Box
                maxWidth={398}
                height={212}
                bgcolor={"primary.main"}
                p={3}
                borderRadius={4}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                sx={{
                  backgroundImage: `url(${CardWorldMapImg.src})`,
                  backgroundPosition: {
                    xs: "100% 100%",
                    md: "center center",
                  },
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <CardChipIcon />
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  color={"common.white"}
                >
                  {[1, 2, 3].map((item) => (
                    <Typography
                      variant={"h3"}
                      letterSpacing={"0.17em"}
                      fontWeight={500}
                      key={item}
                    >
                      ****
                    </Typography>
                  ))}
                  <Typography
                    variant={"h3"}
                    letterSpacing={"0.17em"}
                    fontWeight={500}
                  >
                    {data?.payment_method?.last_4_digits}
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  color={"common.white"}
                >
                  <Box display={"flex"} gap={2}>
                    <Box>
                      <Typography variant={"body2"}>Expiry Date</Typography>
                      <Typography variant={"body1"} fontWeight={600}>
                        {transformedMonth}/{data?.payment_method?.exp_year}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant={"body2"}>CVV</Typography>
                      <Typography variant={"body1"} fontWeight={600}>
                        ***
                      </Typography>
                    </Box>
                  </Box>
                  <Box width={55} height={20}>
                    {cardBrandIcon(data?.payment_method?.card_brand)}
                  </Box>
                </Box>
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
