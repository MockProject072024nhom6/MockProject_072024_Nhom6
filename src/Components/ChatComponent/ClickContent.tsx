import { ChevronDown, ChevronsRight, FileInput } from "lucide-react"
import React from "react"
import { getImageUrl } from "@/Utils/unltis"
import { I_Props_ClickContent } from "@/Types/CustomerTypes"
import { Input } from "antd"
import TextArea from "antd/es/input/TextArea"

export const ClickContent: React.FC<I_Props_ClickContent> = ({ onClick }) => {
  return (
    <div className='min-w-[300px] font-content flex flex-col gap-[15px]'>
      <div className='flex justify-end'>
        <ChevronDown color='#1E56F8' onClick={onClick} />
      </div>
      <div className='flex justify-between items-center px-[20px] gap-[22px]'>
        <img src={getImageUrl("images/logo.png")} alt='logo' className='w-[20px]' />
        <p className=''>Leave a message</p>
      </div>
      <Input placeholder='Enter your name' />
      <Input placeholder='Enter your email address' />
      <TextArea rows={6} placeholder='Type your message here and click ‘Submit’' />
      <div className='flex justify-end'>
        <button className='flex items-center p-2 bg-white shadow-lg rounded-full px-5 py-1'>
          <ChevronsRight color='#1E56F8' size={16} />
          <p className='text-[#1E56F8]'>Submit</p>
        </button>
      </div>
    </div>
  )
}
