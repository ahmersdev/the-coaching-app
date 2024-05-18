import { Avatar, Box, Divider, Rating, Typography } from "@mui/material";
import useTestimonial from "./use-testimonial";
import { animated } from "react-spring";
import { CarousalBackArrowIcon, CarousalNextArrowIcon } from "@/assets/icons";
import { testimonialData } from "./testimonial.data";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

export default function Testimonial({ bgImg }: any) {
  const { fadeInBottomToTop, refHead, theme } = useTestimonial();

  return (
    <Box
      px={{ xs: 2, md: 12 }}
      py={6}
      bgcolor={"common.bg"}
      sx={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <animated.div style={fadeInBottomToTop} ref={refHead}>
        <Typography variant={"h1"} color={"grey.100"} textAlign={"center"}>
          Our Clients&nbsp;
          <Typography variant={"h1"} color={"primary.800"} component={"span"}>
            Love
          </Typography>
          <br />
          The Coaching App
        </Typography>
      </animated.div>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={{ xs: "100%", md: "80%" }}
        margin={"auto"}
        my={2}
      >
        <Box className="testimonial-prev" sx={{ cursor: "pointer" }}>
          <CarousalBackArrowIcon />
        </Box>
        <Box className="testimonial-next" sx={{ cursor: "pointer" }}>
          <CarousalNextArrowIcon />
        </Box>
      </Box>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        speed={500}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
        }}
        navigation={{
          nextEl: ".testimonial-next",
          prevEl: ".testimonial-prev",
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper"
        style={{ width: "100%" }}
        breakpoints={{
          900: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonialData?.map((item: any, index: number) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundColor: theme?.palette?.common?.white,
              borderRadius: 6,
              height: "100%",
            }}
          >
            <Box px={1.6} py={2.4}>
              <Typography
                variant={"h6"}
                fontWeight={"normal"}
                color={"grey.800"}
              >
                “{item?.comment}”
              </Typography>

              <Divider
                sx={{ borderColor: "secondary.800", my: 2, opacity: 0.1 }}
              />

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Avatar
                    alt="Profile"
                    src={item?.avatar}
                    sx={{
                      width: 42,
                      height: 42,
                      borderColor: "primary.800",
                      border: 1,
                    }}
                  />
                  <Typography variant={"h6"} color={"grey.900"}>
                    - {item?.name}
                  </Typography>
                </Box>

                <Rating
                  value={item?.rating}
                  readOnly
                  sx={{ color: "primary.800" }}
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
