"use client";

import { Avatar, Box, Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { clientsColumns } from "./clients.data";
import Link from "next/link";
import { COACH_SITE } from "@/constants/routes";
import TanstackTable from "@/components/table";
import useClients from "./use-clients";

export default function Clients() {
  const { data, isLoading, isFetching, isError, sortedData } = useClients();

  return (
    <>
      <Typography variant={"h2"} color={"grey.100"} mb={2}>
        Latest Client Progressed
      </Typography>
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
        modules={[EffectCoverflow]}
        className="mySwiper"
        style={{ width: "100%" }}
        breakpoints={{
          900: {
            slidesPerView: data?.clients.length < 6 ? data?.clients.length : 5,
          },
        }}
      >
        {sortedData?.map((item: any, index: number) => (
          <SwiperSlide key={index}>
            <Box
              bgcolor={"secondary.main"}
              borderRadius={3}
              padding={"16px 18px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              flexDirection={"column"}
              gap={2}
              height={"100%"}
            >
              <Avatar
                src={item?.profile_picture}
                sx={{ width: 44, height: 44 }}
              />
              <Box textAlign={"center"}>
                <Typography variant={"h6"} fontWeight={600}>
                  {item?.full_name}
                </Typography>
                <Typography
                  variant={"body1"}
                  fontWeight={600}
                  color={"grey.400"}
                >
                  @{item?.username}
                </Typography>
              </Box>
              <Link
                href={{
                  pathname: COACH_SITE?.CLIENTS_OVERVIEW,
                  query: { clientId: item?.client_id },
                }}
              >
                <Button
                  variant={"contained"}
                  sx={{
                    color: "grey.100",
                    borderRadius: 25,
                    border: "1px dashed",
                    borderColor: "grey.100",
                    background: "transparent",
                    ":hover": {
                      backgroundColor: "grey.100",
                      color: "grey.900",
                    },
                  }}
                  disableElevation
                >
                  View Progress
                </Button>
              </Link>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box mt={2}>
        <TanstackTable
          data={data?.clients}
          columns={clientsColumns}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isPagination
        />
      </Box>
    </>
  );
}
