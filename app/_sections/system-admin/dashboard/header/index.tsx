import { Box, Chip, Grid, Typography, useTheme } from "@mui/material";
import { useState } from "react";

const Header = ({ name, headerCardsArray }: any) => {
  const theme: any = useTheme();

  const [hoverStates, setHoverStates] = useState(
    Array(headerCardsArray?.length + 1)?.fill(false)
  );

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Typography variant={"h2"}>Hi {name}, Welcome Back!</Typography>

      <Grid container spacing={2}>
        {headerCardsArray?.map((item: any) => (
          <Grid item xs={12} md={4} key={item?.id}>
            <Box
              borderRadius={6}
              border={"0px 0px 0px 6px"}
              padding={"24px 16px"}
              borderLeft={`6px solid ${theme?.palette?.primary?.main}`}
              bgcolor={"secondary.main"}
              height={"97px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              onMouseEnter={() => {
                const newHoverStates = [...hoverStates];
                newHoverStates[item?.id] = true;
                setHoverStates(newHoverStates);
              }}
              onMouseLeave={() => {
                const newHoverStates = [...hoverStates];
                newHoverStates[item?.id] = false;
                setHoverStates(newHoverStates);
              }}
              sx={{
                ":hover": {
                  boxShadow: theme?.CustomShadows?.()?.primary,
                },
              }}
            >
              <Typography variant={"body1"}>{item?.title}</Typography>
              <Chip
                label={item?.count}
                sx={{
                  width: "132px",
                  height: "49px",
                  bgcolor: hoverStates[item?.id]
                    ? theme?.palette?.primary?.main
                    : theme?.palette?.secondary?.[900],
                  borderRadius: "200px",
                  color: `${theme?.palette?.grey?.[400]}`,
                  fontWeight: 600,
                  fontSize: "24px",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Header;
