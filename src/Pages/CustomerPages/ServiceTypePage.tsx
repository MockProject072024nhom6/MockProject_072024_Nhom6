import { QnA_Enterprise, serviceOffer } from "@/Arrays/CustomerArrays"
import Hero from "@/Components/ServiceTypeComponent/HeroSection/Hero"
import Introduction from "@/Components/ServiceTypeComponent/IntroductionSection/Introduction"
import QandA from "@/Components/ServiceTypeComponent/QandASection/QandA"
import Offer from "@/Components/ServiceTypeComponent/ServiceTypeOfferSection/Offer"
import React from "react"

const ServiceTypePage = () => {
  const serviceType = serviceOffer[0]
  return (
    <div className='flex flex-col'>
      <Hero />
      <Introduction />
      <Offer serviceType={serviceType} />
      <QandA serviceType={serviceType} />
    </div>
  )
}

export default ServiceTypePage
