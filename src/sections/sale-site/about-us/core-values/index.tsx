import { AboutUsCoreValuesBgImg } from "@/assets/images";
import { Box, Typography } from "@mui/material";
import useCoreValues from "./use-core-values";
import { animated } from "react-spring";
import { CarousalBackArrowIcon, CarousalNextArrowIcon } from "@/assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { coreValuesData } from "./core-values.data";
import Image from "next/image";

export default function CoreValues() {
  const { fadeInBottomToTop, refHead, theme, fadeIn, refText } =
    useCoreValues();

  return (
    <Box
      px={{ xs: 2, md: 12 }}
      py={6}
      bgcolor={"common.bg"}
      sx={{
        backgroundImage: `url(${AboutUsCoreValuesBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <animated.div style={fadeInBottomToTop} ref={refHead}>
        <Typography variant={"h1"} color={"grey.100"} textAlign={"center"}>
          Core Values
        </Typography>
      </animated.div>

      <animated.div style={fadeIn} ref={refText}>
        <Typography
          variant={"h5"}
          fontWeight={"normal"}
          color={"grey.100"}
          textAlign={"center"}
          width={"70%"}
          margin={"auto"}
          mt={2}
        >
          Witness the incredible transformations achieved by our clients under
          the guidance of our skilled trainers. See firsthand the impact you can
          make as a part of{" "}
          <Typography
            variant={"h5"}
            fontWeight={900}
            color={"grey.100"}
            component={"span"}
          >
            The Coaching App!
          </Typography>
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
        {coreValuesData?.map((item: any, index: number) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundColor: theme?.palette?.secondary?.[800],
              borderRadius: 6,
              height: "100%",
            }}
          >
            <Box px={1.6} py={2.4} textAlign={"center"}>
              <Image
                src={item?.img.src}
                alt={item?.title}
                width={96}
                height={96}
              />
              <Typography variant={"h2"} color={"common.white"}>
                {item?.title}
              </Typography>
              <Typography variant={"h6"} color={"grey.400"}>
                {item?.desc}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
