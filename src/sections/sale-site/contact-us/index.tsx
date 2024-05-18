"use client";

import { Avatar, Grid, Typography } from "@mui/material";
import { animated } from "react-spring";
import useContactUs from "./use-contact-us";
import { ContactUsHeroBannerBgImg, HomeAboutImg } from "@/assets/images";
import { pxToRem } from "@/utils/get-font-value";
import { LoadingButton } from "@mui/lab";
import { FormProvider } from "@/components/react-hook-form";
import { contactUsDataArray } from "./contact-us.data";

export default function ContactUs() {
  const { methods, handleSubmit, onSubmit, slideInLeft, ref } = useContactUs();

  return (
    <Grid
      container
      columnSpacing={2}
      px={{ xs: 2, md: 12 }}
      py={6}
      sx={{
        backgroundImage: `url(${ContactUsHeroBannerBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      ref={ref}
    >
      <Grid item xs={12} md={6} margin={"auto 0"}>
        <animated.div style={slideInLeft}>
          <Typography variant={"h2"} color={"grey.100"} fontSize={pxToRem(40)}>
            Let&rsquo;s Contact with experts
          </Typography>
          <Typography
            variant={"h5"}
            color={"grey.100"}
            fontWeight={"normal"}
            mt={2}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy.
          </Typography>

          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2} mt={3}>
              {contactUsDataArray?.map((item: any) => (
                <Grid item xs={12} md={item?.md} key={item?.id}>
                  <item.component {...item?.componentProps} size={"small"} />
                </Grid>
              ))}

              <Grid item xs={12}>
                <LoadingButton
                  variant={"contained"}
                  sx={{
                    color: "grey.100",
                    width: 212,
                    height: 54,
                    borderRadius: 25,
                    border: "1px solid",
                    borderColor: "primary.main",
                  }}
                  disableElevation
                  type={"submit"}
                >
                  Send
                </LoadingButton>
              </Grid>
            </Grid>
          </FormProvider>
        </animated.div>
      </Grid>

      <Grid item xs={0} md={6} py={2}>
        <Avatar
          src={HomeAboutImg.src}
          alt={"The Coaching App"}
          sx={{
            width: { xs: "100%", md: 539 },
            height: { xs: "auto", md: 1000 },
            opacity: 0,
          }}
        />
      </Grid>
    </Grid>
  );
}
