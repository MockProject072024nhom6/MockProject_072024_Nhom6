import { Flex, Rate } from "antd"
import TextArea from "antd/es/input/TextArea"
import React from "react"

export const Feedback = () => {
  return (
    <div className='px-[5%] pt-[1%]'>
      <div className='flex flex-col items-center gap-5 rounded-3xl shadow-lg py-4'>
        <p className='text-[#908C91] text-[32px] font-extrabold'>Share your opinion</p>
        <Rate className='text-[40px]' />
        <TextArea rows={4} className='w-9/12 bg-[#F6F6F6] px-[16px] py-[38px] mt-2 border-none rounded-2xl' />
        <button className='bg-[#261E27] text-white text-[24px] rounded-xl px-[93px] py-[6px] font-normal mt-[55px] mb-[20px]'>
          Evaluate
        </button>
      </div>
    </div>
  )
}
