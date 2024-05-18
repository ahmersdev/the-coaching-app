"use client";

import { AboutUsTestimonialBgImg } from "@/assets/images";
import FaqsSaleSite from "@/components/faqs-sale-site";
import Testimonial from "@/components/testimonial";
import HeroBanner from "./hero-banner";
import MoreAboutUs from "./more-about-us";
import CoreValues from "./core-values";

export default function AboutUs() {
  return (
    <>
      <HeroBanner />
      <MoreAboutUs />
      <CoreValues />
      <FaqsSaleSite />
      <Testimonial bgImg={AboutUsTestimonialBgImg} />
    </>
  );
}
