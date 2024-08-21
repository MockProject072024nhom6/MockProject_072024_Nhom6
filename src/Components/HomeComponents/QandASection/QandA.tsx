import { ChevronDown, ChevronRight } from "lucide-react"
import React, { useState } from "react"

const QandA = () => {
  const data = [
    {
      question: "What measures are in place to ensure the safety and reliability of your security guards?",
      answer:
        "XPressGuards conducts thorough background checks, continuous performance evaluations, and ongoing training to maintain the safety, reliability, and professionalism of our security guards."
    },
    {
      question: "What measures are in place to handle emergency situations?",
      answer:
        "XPressGuards conducts thorough background checks, continuous performance evaluations, and ongoing training to maintain the safety, reliability, and professionalism of our security guards."
    },
    {
      question: "How does XPressGuards handle incidents or security breaches?",
      answer:
        "XPressGuards conducts thorough background checks, continuous performance evaluations, and ongoing training to maintain the safety, reliability, and professionalism of our security guards."
    },
    {
      question: "What qualifications and training do your security guards have?",
      answer:
        "XPressGuards conducts thorough background checks, continuous performance evaluations, and ongoing training to maintain the safety, reliability, and professionalism of our security guards."
    },
    {
      question: "How do you match security guards to specific client needs or industries?",
      answer:
        "XPressGuards conducts thorough background checks, continuous performance evaluations, and ongoing training to maintain the safety, reliability, and professionalism of our security guards."
    },
    {
      question: "What services do your security guards provide?",
      answer:
        "XPressGuards conducts thorough background checks, continuous performance evaluations, and ongoing training to maintain the safety, reliability, and professionalism of our security guards."
    },
    {
      question: "What types of industries or clients do you typically serve?",
      answer:
        "XPressGuards conducts thorough background checks, continuous performance evaluations, and ongoing training to maintain the safety, reliability, and professionalism of our security guards."
    },
    {
      question: "What is the geographic coverage of XPressGuards?",
      answer:
        "XPressGuards conducts thorough background checks, continuous performance evaluations, and ongoing training to maintain the safety, reliability, and professionalism of our security guards."
    },
    {
      question: "What is the process for requesting security guard services from XPressGuards?",
      answer:
        "XPressGuards conducts thorough background checks, continuous performance evaluations, and ongoing training to maintain the safety, reliability, and professionalism of our security guards."
    },
    {
      question: "Can I request security guards for short-term or onetime events?",
      answer:
        "XPressGuards conducts thorough background checks, continuous performance evaluations, and ongoing training to maintain the safety, reliability, and professionalism of our security guards."
    }
  ]
  const [toggleQuestion, setToggleQuestion] = useState(Array(data.length).fill(false))
  const handleToggle = (index: number) => {
    const newToggleQuestion = [...toggleQuestion]
    newToggleQuestion[index] = !newToggleQuestion[index]
    setToggleQuestion(newToggleQuestion)
  }
  return (
    <section className='w-screen flex flex-col items-center font-headings font-semibold mb-2'>
      <p className='text-[19px] mt-3 lg:mt-12 lg:mb-11 lg:text-[40px]'>Top 10 Frequently Asked Questions</p>
      {data.map((d, i) => (
        <div key={i} className='flex flex-col w-full p-6 lg:px-[5%] text-[11px] lg:text-[18px]'>
          <div className='flex justify-between' onClick={() => handleToggle(i)}>
            <p className='w-8/12 '>{d.question}</p>
            {toggleQuestion[i] ? <ChevronDown /> : <ChevronRight color='#1E56F8' />}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              toggleQuestion[i] ? "max-h-screen py-7 lg:py-9" : "max-h-0"
            }`}
          >
            <div className='font-light text-[#787486]'>{d.answer}</div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default QandA
