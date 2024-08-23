import QnA from "@/Components/SharedComponents/QnA"
import { I_Props_Offer } from "@/Types/CustomerTypes"
import React, { useState } from "react"

const QandA = ({ serviceType }: { serviceType: I_Props_Offer }) => {
  const [toggleQuestion, setToggleQuestion] = useState(Array(QnA.length).fill(false))
  const handleToggle = (index: number) => {
    const newToggleQuestion = [...toggleQuestion]
    newToggleQuestion[index] = !newToggleQuestion[index]
    setToggleQuestion(newToggleQuestion)
  }
  return (
    <section className='w-screen font-headings'>
      <p className='text-header uppercase text-[20px] font-bold text-center mt-[5%]'>{serviceType.type} Service</p>
      <p className='text-[23px] lg:text-[40px] font-extrabold text-center mb-[3%]'>Frequently Asked Questions</p>
      {serviceType.qnA.map((q, i) => (
        <QnA data={q} key={i} index={i} toggleQuestion={toggleQuestion} handleToggle={handleToggle} />
      ))}
      <div className='h-[30vh] bg-black mt-[10%]' />
    </section>
  )
}

export default QandA
