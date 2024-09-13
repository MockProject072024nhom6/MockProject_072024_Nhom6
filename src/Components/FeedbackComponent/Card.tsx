import { I_Props_FeedbackCardComponent } from "@/Types/CustomerTypes"
import { getImageUrl } from "@/Utils/unltis"
import { Rate } from "antd"
import React from "react"

export const Card: React.FC<I_Props_FeedbackCardComponent> = ({ bgColor, info }) => {
  return (
    <div className='rounded-xl flex flex-col items-center' style={{ backgroundColor: bgColor }}>
      <Rate defaultValue={info.star} className='mt-[37px]' />
      <p className='text-white w-[85%] pt-[37px] text-center'>"{info.details}"</p>
      <img src={getImageUrl(`images/${info.avatar}`)} alt={`${info.avatar}`} className='my-[37px]' />
    </div>
  )
}
