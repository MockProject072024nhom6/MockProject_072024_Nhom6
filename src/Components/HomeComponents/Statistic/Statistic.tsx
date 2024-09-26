import React from "react"

const Statistic = () => {
  const data = [
    { number: "4032+", text: "Protected customers" },
    { number: "32", text: "years of experience" },
    { number: "614", text: "Office Location" },
    { number: "50", text: "States served" }
  ]
  return (
    <div className='w-screen flex lg:flex-row flex-col h-[70vh] lg:h-[18vh] font-headings'>
      {data.map(d => (
        <div className='w-screen h-1/4 lg:h-full lg:bg-gradient-to-r lg:from-header/95 lg:to-header bg-gradient-to-b from-header/95 to-header flex flex-col justify-center items-center'>
          <p className='text-white text-[48px] leading-none font-bold'>{d.number}</p>
          <p className='font-semibold text-black'>{d.text}</p>
        </div>
      ))}
    </div>
  )
}

export default Statistic
