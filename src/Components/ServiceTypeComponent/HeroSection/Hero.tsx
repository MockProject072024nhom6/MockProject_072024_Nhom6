import LinkButton from "@/Components/SharedComponents/LinkButton"
import { getImageUrl } from "@/Utils/unltis"
import React from "react"

const Hero = () => {
  return (
    <section className='relative flex justify-center w-full font-headings'>
      <img
        src={getImageUrl("images/banner-enterprise-security.png")}
        alt='banner-enterprise-security'
        className='w-[95%] h-[30vh] lg:h-auto'
      />
      <div className='absolute inset-0 flex flex-col items-center justify-center font-semibold text-white text-center'>
        <p className='mt-4 lg:mt text-[16px] text-header font-bold w-1/2 lg:text-[64px] lg:w-2/3'>
          Event Security Guards
        </p>
        <p className='mt-1 text-sm text-white lg:text-[48px]'>#1 Security Company</p>
        <p className='my-3 text-[10px] text-white lg:text-[16px] w-4/6 lg:w-[40%] lg:mb-[10%]'>
          On-call service 24/7. Our professional security services include security guards, bodyguards and patrol. CALL
          NOW!
        </p>
        <LinkButton text='Booking now' large={true} />
        {window.innerWidth > 1240 && <LinkButton text='View Price Server Now' fullBg />}
      </div>
    </section>
  )
}

export default Hero
