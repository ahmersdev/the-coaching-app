"use client";

import { AboutUsTestimonialBgImg } from "@/app/_assets/images";
import FaqsSaleSite from "@/app/_components/faqs-sale-site";
import Testimonial from "@/app/_components/testimonial";
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
