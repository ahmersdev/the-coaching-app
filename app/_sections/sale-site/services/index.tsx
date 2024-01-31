"use client";

import Testimonial from "@/app/_components/testimonial";
import HeroBanner from "./hero-banner";
import { ServicesTestimonialBgImg } from "@/app/_assets/images";
import OurServices from "./our-services";
import Nutritional from "./nutritional";
import ProgressTracking from "./progress-tracking";
import Challenges from "./challenges";

export default function Services() {
  return (
    <>
      <HeroBanner />
      <OurServices />
      <Nutritional />
      <ProgressTracking />
      <Challenges />
      <Testimonial bgImg={ServicesTestimonialBgImg} />
    </>
  );
}
