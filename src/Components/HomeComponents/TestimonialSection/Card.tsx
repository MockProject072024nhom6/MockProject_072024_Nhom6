import { getImageUrl } from "@/Utils/unltis"
import React from "react"

const Card = ({ testimonial, index, currentCard }: I_Props_TestimonialCard) => {
  if (index !== currentCard && window.innerWidth >= 1024) return null
  return (
    <div className='relative w-[90vw] bg-white drop-shadow-xl rounded-3xl gap-5 lg:gap-0 h-1/2 flex flex-col items-center pb-7 lg:rounded-2xl lg:px-10'>
      <img src={getImageUrl("images/testimonial-cus-avatar.png")} alt='cus-avatar' className='absolute -top-[25%]' />
      <p className='pt-[20%] lg:pt-[13%] lg:text-[16px] text-[14px] font-bold'>{testimonial.name}</p>
      <p className='text-[15px] lg:text-[16px] font-light text-header lg:mb-[5%]'>{testimonial.jobTitle}</p>
      <p className='text-[10px] lg:text-[16px] italic font-normal px-2 text-center lg:w-10/12'>
        "{testimonial.feedback}"
      </p>
    </div>
  )
}

export default Card
