import { HomeTrainersBgImg } from "@/assets/images";
import { Box, Typography } from "@mui/material";
import { animated } from "react-spring";
import useTrainers from "./use-trainers";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { CarousalBackArrowIcon, CarousalNextArrowIcon } from "@/assets/icons";
import { trainersData } from "./trainers.data";
import Image from "next/image";

export default function Trainers() {
  const { fadeInBottomToTop, refHead, setCenteredIndex, centeredIndex } =
    useTrainers();

  return (
    <Box
      px={{ xs: 2, md: 12 }}
      py={6}
      bgcolor={"common.bg"}
      sx={{
        backgroundImage: `url(${HomeTrainersBgImg.src})`,
        backgroundPosition: { xs: "100% 100%", md: "center bottom" },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <animated.div style={fadeInBottomToTop} ref={refHead}>
        <Typography variant={"h1"} color={"grey.100"} textAlign={"center"}>
          We have best
          <br />
          <Typography variant={"h1"} color={"primary.800"} component={"span"}>
            Qualified&nbsp;
          </Typography>
          Trainers
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
        <Box className="swiper-prev" sx={{ cursor: "pointer" }}>
          <CarousalBackArrowIcon />
        </Box>
        <Box className="swiper-next" sx={{ cursor: "pointer" }}>
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
        onSlideChange={(swiper) => setCenteredIndex(swiper.realIndex)}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
        }}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
        style={{ width: "100%" }}
        breakpoints={{
          900: {
            slidesPerView: 3,
          },
        }}
      >
        {trainersData?.map((item: any, index: number) => (
          <SwiperSlide
            key={index}
            style={{
              paddingTop:
                centeredIndex !== index ? ({ xs: 0, md: "150px" } as any) : 0,
            }}
          >
            <Image
              src={item?.img.src}
              alt="The Coaching App"
              width={372}
              height={442}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
