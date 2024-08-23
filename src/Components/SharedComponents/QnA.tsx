import React from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { I_Props_QnA, I_Props_QnAComponent } from "@/Types/CustomerTypes"

const QnA = (props: I_Props_QnAComponent) => {
  return (
    <div className='flex flex-col w-full p-6 lg:px-[10%] text-[11px] lg:text-[18px]'>
      <div className='flex justify-between' onClick={() => props.handleToggle(props.index)}>
        <p className='w-8/12 font-semibold'>{props.data.question}</p>
        {props.toggleQuestion[props.index] ? <ChevronDown /> : <ChevronRight color='#1E56F8' />}
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          props.toggleQuestion[props.index] ? "max-h-screen py-7 lg:py-9" : "max-h-0"
        }`}
      >
        <div className='font-light text-[#787486]' dangerouslySetInnerHTML={{ __html: props.data.answer }} />
      </div>
    </div>
  )
}

export default QnA
