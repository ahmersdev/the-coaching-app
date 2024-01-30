"use client";

import Testimonial from "@/app/_components/testimonial";
import HeroBanner from "./hero-banner";
import { ServicesTestimonialBgImg } from "@/app/_assets/images";

export default function Services() {
  return (
    <>
      <HeroBanner />
      <Testimonial bgImg={ServicesTestimonialBgImg} />
    </>
  );
}
