import AboutUs from "@/Components/HomeComponents/AboutUsSection/AboutUs"
import Benefit from "@/Components/HomeComponents/BenefitSection/Benefit"
import Hero from "@/Components/HomeComponents/HeroSection/Hero"
import QandA from "@/Components/HomeComponents/QandASection/QandA"
import ServiceType from "@/Components/HomeComponents/ServiceTypeSection/ServiceType"
import Statistic from "@/Components/HomeComponents/Statistic/Statistic"
import Testimonial from "@/Components/HomeComponents/TestimonialSection/Testimonial"
import React from "react"

const HomePage = () => {
  return (
    <>
      <Hero />
      <ServiceType />
      <Benefit />
      <Statistic />
      <QandA />
      <Testimonial />
      <AboutUs />
    </>
  )
}

export default HomePage
