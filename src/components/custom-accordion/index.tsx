import { AccordionCloseIcon, AccordionExpandIcon } from "@/assets/icons";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useState } from "react";

const CustomAccordion = ({
  accordions,
  CustomIcon,
  customIconClick,
  bgcolor = "transparent",
  CloseIcon = <AccordionCloseIcon />,
  ExpandIcon = <AccordionExpandIcon />,
}: any) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleChange = (index: number) => {
    setExpandedIndex((prevIndex: any) => (prevIndex === index ? null : index));
  };

  return (
    <>
      {accordions.map((item: any, index: number) => (
        <Box key={index} borderBottom={1} borderColor={"secondary.800"} mb={2}>
          <Accordion
            expanded={expandedIndex === index}
            onChange={() => handleChange(index)}
            elevation={0}
            sx={{
              bgcolor,
              "&.Mui-expanded": {
                margin: 0,
              },
            }}
          >
            <AccordionSummary
              expandIcon={expandedIndex === index ? CloseIcon : ExpandIcon}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Box
                width={"100%"}
                display={"flex"}
                gap={1}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Typography variant={"h5"} fontWeight={400} color={"grey.100"}>
                  {item?.summary}
                </Typography>
                {CustomIcon && (
                  <Box onClick={() => customIconClick(item)} mr={1}>
                    <CustomIcon />
                  </Box>
                )}
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant={"h6"} fontWeight={400} color={"grey.100"}>
                {item?.details}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </>
  );
};

export default CustomAccordion;
