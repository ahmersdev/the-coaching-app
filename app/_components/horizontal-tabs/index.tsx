import { useState, Children, cloneElement } from "react";
import { Tabs, Tab, Typography, Box, Card, useTheme } from "@mui/material";

const HorizontalTabs = (props: any) => {
  const {
    tabsDataArray = [],
    children,
    setActiveTab = () => {},
    variant = "scrollable",
    defaultValue = 0,
  } = props;

  const theme: any = useTheme();

  const [value, setValue] = useState(defaultValue);
  const handleChange = (_: any, newValue: number) => {
    setValue(newValue);
  };

  const arrayChildren = Children?.toArray(children);

  return (
    <Card sx={{ bgcolor: "initial", boxShadow: 0, border: 0 }}>
      <Tabs
        selectionFollowsFocus
        orientation="horizontal"
        variant={variant}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        allowScrollButtonsMobile
        sx={{
          border: 1,
          width: "fit-content",
          borderRadius: 2,
          borderColor: "secondary.800",
          minHeight: 36,
          "& .MuiTabs-scroller": {
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          "& .MuiTabScrollButton-root": {
            display: "none",
          },
        }}
      >
        {tabsDataArray?.map((tabData: any, index: any) => (
          <Tab
            wrapped
            sx={{
              color: "grey.500",
              fontSize: "14px",
              fontWeight: 400,
              borderRadius: 0,
              borderRight: index < tabsDataArray?.length - 1 ? 1 : 0,
              borderColor: "grey.100",
              "&.Mui-selected": {
                color: "grey.100",
                backgroundColor: "primary.main",
                borderRadius: 0,
              },
            }}
            key={tabData?.title}
            onClick={() => {
              setActiveTab ? setActiveTab(tabData?.title) : null;
            }}
            icon={
              <tabData.icon
                fill={
                  value === index
                    ? theme?.palette?.grey?.[100]
                    : theme?.palette?.grey?.[500]
                }
              />
            }
            iconPosition="start"
            label={
              <Typography
                variant="body1"
                component="span"
                fontWeight={600}
                ml={0.5}
              >
                {tabData?.title}
              </Typography>
            }
          />
        ))}
      </Tabs>
      <Box sx={{ py: 2 }}>
        {arrayChildren?.map((child: any, index) => (
          <Box key={index}>
            {value === index && cloneElement(child, { setValue })}
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default HorizontalTabs;
