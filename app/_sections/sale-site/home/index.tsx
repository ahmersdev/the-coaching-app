"use client";

import Testimonial from "@/app/_components/testimonial";
import About from "./about";
import ChooseUs from "./choose-us";
import HeroBanner from "./hero-banner";
import Philosophy from "./philosophy";
import Trainers from "./trainers";
import { HomeTestimonialBgImg } from "@/app/_assets/images";
import Features from "./features";
import Workout from "./workout";

export default function SaleSiteHome() {
  return (
    <>
      <HeroBanner />
      <About />
      <ChooseUs />
      <Philosophy />
      <Trainers />
      <Features />
      <Workout />
      <Testimonial bgImg={HomeTestimonialBgImg} />
    </>
  );
}
