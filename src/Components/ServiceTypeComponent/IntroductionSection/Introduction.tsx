import React from "react"
import Highlight from "./Highlight"
import { highlightInfo } from "@/Arrays/CustomerArrays"

const Introduction = () => {
  return (
    <section className='flex flex-col items-center text-center font-bold mb-[5%]  lg:mb-0'>
      <p className='my-[3%] uppercase text-[10px] lg:text-[20px] text-header lg:my-[2%]'>what we do</p>
      <p className='text-[25px] lg:text-[50px] w-2/3 lg:leading-[55px] leading-7 mb-[5%] '>
        #1 Nationwide Enterprise Security Services
      </p>
      <p className='w-5/6 font-semibold mb-[3%] lg:text-[20px] lg:w-[49%]'>
        XPressGuards is the #1 Enterprise Security guard company in the United States. With over 600 offices, we offer
        24/7 personal security services in all 50 states.
      </p>
      <div className='lg:flex lg:w-screen lg:justify-center lg:mx-[10%] '>
        {highlightInfo.map((h, i) => (
          <Highlight key={i} highlight={h} />
        ))}
      </div>
    </section>
  )
}

export default Introduction
