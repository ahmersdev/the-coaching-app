"use client";

import Testimonial from "@/components/testimonial";
import HeroBanner from "./hero-banner";
import { ServicesTestimonialBgImg } from "@/assets/images";
import OurServices from "./our-services";
import Nutritional from "./nutritional";
import ProgressTracking from "./progress-tracking";
import Challenges from "./challenges";
import FaqsSaleSite from "@/components/faqs-sale-site";

export default function Services() {
  return (
    <>
      <HeroBanner />
      <OurServices />
      <Nutritional />
      <ProgressTracking />
      <Challenges />
      <FaqsSaleSite />
      <Testimonial bgImg={ServicesTestimonialBgImg} />
    </>
  );
}
