import {
  Box,
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { PricingHeroBannerBgImg } from "@/assets/images";
import { useSpring } from "react-spring";
import { animated } from "react-spring";
import { pxToRem } from "@/utils/get-font-value";
import { PricingList } from "./hero-banner.data";
import DoneIcon from "@mui/icons-material/Done";

export default function HeroBanner() {
  const theme: any = useTheme();
  const bounce: any = useSpring({
    from: { transform: "scale(0.8)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { tension: 200, friction: 12 },
  });

  return (
    <Grid
      container
      px={{ xs: 2, md: 12 }}
      pb={6}
      sx={{
        backgroundImage: `url(${PricingHeroBannerBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center 20%" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      height={{ xs: "auto", md: 1000 }}
    >
      <Grid
        item
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <animated.div style={bounce}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Chip
              label={"Pricing Plan"}
              sx={{
                color: "secondary.main",
                backgroundColor: "common.white",
                fontWeight: 500,
                border: 1,
              }}
            />
            <Typography
              component={"h1"}
              fontSize={pxToRem(70)}
              fontWeight={400}
              color={"common.white"}
              my={1}
            >
              Simple{" "}
              <Typography
                component={"span"}
                fontSize={pxToRem(70)}
                fontWeight={400}
                sx={{
                  background: theme?.palette?.gradients?.yellowGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Pricing
              </Typography>
            </Typography>

            <Typography
              variant={"h6"}
              fontWeight={400}
              color={"common.white"}
              width={{ xs: "100%", md: "60%" }}
              textAlign={"center"}
              mb={5}
            >
              Lorem ipsum dolor sit amet consectetur. Orci faucibus rhoncus id
              donec enim ultricies enim justo. Tincidunt porttitor imperdiet et
              tellus aliquam elit sit sodales ipsum.
            </Typography>

            <Box
              borderRadius={5}
              width={{ xs: "100%", md: "70%" }}
              sx={{ background: theme?.palette?.gradients?.primary }}
            >
              <Typography
                variant={"h2"}
                color={"common.white"}
                m={4}
                fontWeight={500}
              >
                Clear & Simple
              </Typography>

              <Box borderRadius={5} bgcolor={"common.white"} px={4} py={2}>
                <Typography
                  variant={"h1"}
                  color={"common.text"}
                  fontWeight={500}
                >
                  $10
                  <Typography
                    component={"span"}
                    variant={"h2"}
                    fontWeight={500}
                  >
                    /mo
                  </Typography>
                </Typography>

                <Grid container>
                  <Grid item xs={12} md={6}>
                    <List>
                      {PricingList?.map((item: any, index: any) => (
                        <ListItem sx={{ pl: 0 }} key={index}>
                          <ListItemIcon sx={{ minWidth: pxToRem(30) }}>
                            <DoneIcon sx={{ color: "common.text" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            sx={{
                              color: "common.text",
                              ".MuiTypography-root": {
                                fontSize: pxToRem(16),
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <List>
                      {PricingList?.map((item: any, index: any) => (
                        <ListItem sx={{ pl: 0 }} key={index}>
                          <ListItemIcon sx={{ minWidth: pxToRem(30) }}>
                            <DoneIcon sx={{ color: "common.text" }} />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            sx={{
                              color: "common.text",
                              ".MuiTypography-root": {
                                fontSize: pxToRem(16),
                              },
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>

                  <Grid item xs={12} textAlign={"center"}>
                    <Button
                      variant={"contained"}
                      sx={{
                        color: "grey.100",
                        borderRadius: 2,
                        border: "1px solid",
                        borderColor: "primary.main",
                        height: 44,
                        width: { xs: "70%", md: 300 },
                        fontSize: pxToRem(16),
                        fontWeight: "normal",
                      }}
                      disableElevation
                    >
                      Sign Up
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </animated.div>
      </Grid>
    </Grid>
  );
}
