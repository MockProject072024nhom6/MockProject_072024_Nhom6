import { serviceTypeStyle } from "@/Styles/HomeStyle"
import { ArrowLeft, ArrowRight } from "lucide-react"
import React, { useState } from "react"
import Card from "./Card"
import { useMediaQuery } from "react-responsive"
import { serviceType } from "@/Arrays/CustomerArrays"

const ServiceType = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (isMobile) {
      if (currentIndex + 1 < serviceType.length) {
        setCurrentIndex(currentIndex + 1)
      }
    } else {
      if (currentIndex + 3 < serviceType.length) {
        setCurrentIndex(currentIndex + 1)
      }
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
      <div style={{ transform: `translateX(-${currentIndex * 20.5}%)` }} className={serviceTypeStyle.cardContainer}>
        {serviceType.map(s => (
          <Card key={s.name} serviceType={s} />
        ))}
      </div>
      <div className={serviceTypeStyle.buttons}>
        <ArrowLeft size='50px' onClick={handlePrev} />
        <ArrowRight size='50px' onClick={handleNext} />
      </div>
      <div>
        <div className={`${serviceTypeStyle.layer}  left-0`}></div>
        <div className={`${serviceTypeStyle.layer}  right-0`}></div>
      </div>
    </section>
  )
}

export default ServiceType
