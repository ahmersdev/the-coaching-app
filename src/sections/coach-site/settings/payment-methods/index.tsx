import { CardChipIcon, PaymentMethodDetailsIcon } from "@/assets/icons";
import { CardWorldMapImg } from "@/assets/images";
import NoData from "@/components/no-data";
import { useGetPaymentMethodsQuery } from "@/services/coach-site/settings/payment-methods";
import { useAppSelector } from "@/store/store";
import { decryptValuesFromToken } from "@/utils/auth";
import { Box, Divider, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function PaymentMethods() {
  const [decryptedValues, setDecryptedValues] = useState<any>({});
  const [initialLoading, setInitialLoading] = useState(true);

  const tokenSelector = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    const decryptToken = async () => {
      if (tokenSelector) {
        const values = await decryptValuesFromToken(tokenSelector);
        setDecryptedValues(values);
      }
    };

    decryptToken();
    setInitialLoading(false);
  }, [tokenSelector]);

  const { data, isLoading, isFetching, isError } = useGetPaymentMethodsQuery(
    {
      coach_id: decryptedValues?.coach_id,
    },
    { skip: !decryptedValues?.coach_id }
  );

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
                width={500}
                height={250}
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
                  Expiry
                </Box>
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
