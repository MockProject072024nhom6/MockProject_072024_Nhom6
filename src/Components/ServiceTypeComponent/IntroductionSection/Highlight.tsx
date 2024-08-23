import { I_Props_Highlight } from "@/Types/CustomerTypes"
import { getImageUrl } from "@/Utils/unltis"
import React from "react"

const Highlight = ({ highlight }: { highlight: I_Props_Highlight }) => {
  return (
    <div className='flex flex-col items-center text-center w-[80vw] lg:w-[25%] mb-[12%] lg:mb-[5%]'>
      <img src={getImageUrl(highlight.img)} alt={highlight.title} />
      <p className='font-extrabold text-xl mb-[3%]'>{highlight.title}</p>
      <p className='font-extralight text-[16px] lg:text-[18px] lg:w-2/3 lg:w-[92%]'>{highlight.text}</p>
    </div>
  )
}

export default Highlight
