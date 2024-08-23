import { QnA as data } from "@/Arrays/CustomerArrays"
import QnA from "../../SharedComponents/QnA"
import React, { useState } from "react"

const QandA = () => {
  const [toggleQuestion, setToggleQuestion] = useState(Array(QnA.length).fill(false))
  const handleToggle = (index: number) => {
    const newToggleQuestion = [...toggleQuestion]
    newToggleQuestion[index] = !newToggleQuestion[index]
    setToggleQuestion(newToggleQuestion)
  }
  return (
    <section className='w-screen flex flex-col items-center font-headings font-semibold mb-2'>
      <p className='text-[19px] mt-3 lg:mt-12 lg:mb-11 lg:text-[40px]'>Top 10 Frequently Asked Questions</p>
      {data.map((q, i) => (
        <QnA data={q} key={i} index={i} toggleQuestion={toggleQuestion} handleToggle={handleToggle} />
      ))}
    </section>
  )
}

export default QandA
