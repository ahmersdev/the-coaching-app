"use client";

import Testimonial from "@/app/_components/testimonial";
import HeroBanner from "./hero-banner";
import { ServicesTestimonialBgImg } from "@/app/_assets/images";
import OurServices from "./our-services";
import Nutritional from "./nutritional";

export default function Services() {
  return (
    <>
      <HeroBanner />
      <OurServices />
      <Nutritional />
      <Testimonial bgImg={ServicesTestimonialBgImg} />
    </>
  );
}
