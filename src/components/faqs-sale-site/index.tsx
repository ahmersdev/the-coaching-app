import { Box, Typography } from "@mui/material";
import useFaqsSaleSite from "./use-faqs-sale-site";
import { animated } from "react-spring";
import CustomAccordion from "../custom-accordion";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ApiErrorState from "../api-error-state";
import { SkeletonTable } from "../skeletons";

export default function FaqsSaleSite() {
  const {
    fadeInBottomToTop,
    refHead,
    transformedData,
    isLoading,
    isFetching,
    isError,
  } = useFaqsSaleSite();

  return (
    <Box
      px={{ xs: 2, md: 12 }}
      py={6}
      bgcolor={"common.bg"}
      position={"relative"}
    >
      <Box
        position={"absolute"}
        top={"50%"}
        right={0}
        bgcolor={"success.700"}
        width={212}
        height={212}
        borderRadius={"50%"}
        sx={{
          opacity: 0.3,
          filter: "blur(100px)",
          transform: "translateY(-50%)",
        }}
      />

      <animated.div style={fadeInBottomToTop} ref={refHead}>
        <Typography variant={"h1"} color={"grey.100"} textAlign={"center"}>
          Frequently Asked
          <br />
          <Typography variant={"h1"} color={"primary.800"} component={"span"}>
            Questions
          </Typography>
        </Typography>
      </animated.div>

      {isError ? (
        <ApiErrorState />
      ) : isLoading || isFetching ? (
        <SkeletonTable />
      ) : (
        <CustomAccordion
          accordions={transformedData}
          bgcolor={"secondary.main"}
          CloseIcon={<ExpandMoreIcon color={"primary"} />}
          ExpandIcon={<ExpandMoreIcon color={"primary"} />}
        />
      )}
    </Box>
  );
}
