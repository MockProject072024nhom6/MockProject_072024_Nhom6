import { benefitStyle } from "@/Styles/HomeStyle"
import { getImageUrl } from "@/Unltis/unltis"
import { ArrowRight } from "lucide-react"
import React from "react"

const Benefit = () => {
  return (
    <section className={benefitStyle.section}>
      <p className={benefitStyle.heading}>Benefits of hiring a security guard</p>
      <div className={benefitStyle.container}>
        <p className={benefitStyle.text}>
          When it comes to protecting your assets and assuring a secure environment, you can rely on XPressGuards. Our
          armed security officers are the epitome of excellence, providing businesses and individuals across the nation
          with unparalleled protection and peace of mind.
        </p>
        <img src={getImageUrl("images/benefit.png")} alt='benefit-image' className={benefitStyle.img} />
        <div className={benefitStyle.button}>
          <p>Call Now</p>
          <ArrowRight />
        </div>
      </div>
    </section>
  )
}

export default Benefit
