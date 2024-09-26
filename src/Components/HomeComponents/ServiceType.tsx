import { serviceTypeStyle } from "@/Styles/HomeStyle"
import { ArrowLeft, ArrowRight } from "lucide-react"
import React, { useState } from "react"
import ServiceTypeCard from "./ServieTypeCard"

const ServiceType = () => {
  const serviceType = [
    { name: "Personal Protection", srcImg: "images/service-type.png" },
    { name: "Enterprise Security", srcImg: "images/service-type.png" },
    { name: "Event Security", srcImg: "images/service-type.png" },
    { name: "Aviation Security", srcImg: "images/service-type.png" },
    { name: "Transport Security", srcImg: "images/service-type.png" }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex + 3 < serviceType.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  return (
    <section className={serviceTypeStyle.section}>
      <p className={serviceTypeStyle.open}>OPEN 24/7</p>
      <p className={serviceTypeStyle.heading}>Security Guard Services</p>
      <p className={serviceTypeStyle.p}>
        XPressGuards is owned by former law enforcement officers, and we’re one of the top security companies in the
        United States. With over 600 offices nationally, we offer a wide variety of security services.
      </p>
      <div
        style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        className='absolute w-screen left-[20%] top-60 flex gap-3 justify-center overflow-x-hidden duration-300'
      >
        {serviceType.map(s => (
          <ServiceTypeCard serviceType={s} />
        ))}
      </div>
      <div className={serviceTypeStyle.buttons}>
        <ArrowLeft size='50px' onClick={handlePrev} />
        <ArrowRight size='50px' onClick={handleNext} />
      </div>
      <div>
        <div className='absolute bg-white w-1/5 top-0 bottom-0 left-0'></div>
        <div className='absolute bg-white w-1/5 top-0 bottom-0 right-0'></div>
      </div>
    </section>
  )
}

export default ServiceType
