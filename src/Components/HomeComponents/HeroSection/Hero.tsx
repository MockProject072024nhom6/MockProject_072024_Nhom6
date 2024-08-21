import { getImageUrl } from "@/Unltis/unltis"
import React from "react"
import LinkButton from "./LinkButton.tsx"
import { heroStyle } from "@/Styles/HomeStyle"

const Hero = () => {
  return (
    <section className={heroStyle.section}>
      <img
        src={getImageUrl("images/banner.png")}
        alt='banner'
        className='lg:w-screen h-[60vh] object-cover h-[80vh] lg:h-[125vh]'
      />
      <div className={heroStyle.content}>
        <div className={heroStyle.heading1}>XPressGuards</div>
        <div className={heroStyle.heading2}>Security Guard Services</div>
        <p className={heroStyle.p}>
          On-call service 24/7. Our professional security services include security guards, bodyguards and patrol. CALL
          NOW!
        </p>
        <LinkButton text='084-286382' large={false} /> <br />
        <LinkButton text='BOOKING NOW' large={true} />
      </div>
    </section>
  )
}

export default Hero
