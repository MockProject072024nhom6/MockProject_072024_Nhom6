import { getImageUrl } from "@/Utils/unltis"
import React, { useState } from "react"
import Card from "./Card"
import { Circle } from "lucide-react"

const Testimonial = () => {
  const data = [
    {
      avatar: "images/testimonial-cus-avatar",
      name: "James Bell",
      jobTitle: "Operations Manager",
      feedback:
        "Working with XPressGuards has helped our Hotel in so many ways. XPressGuards is reasonably priced and highly respected in Los Angeles. The first thing that caught our attention was the way everyone was so knowledgeable and very professional. First class security company."
    },
    {
      avatar: "images/testimonial-cus-avatar",
      name: "Bella Hadid",
      jobTitle: "Operations Manager",
      feedback:
        "Working with XPressGuards has helped our Hotel in so many ways. XPressGuards is reasonably priced and highly respected in Los Angeles. The first thing that caught our attention was the way everyone was so knowledgeable and very professional. First class security company."
    },
    {
      avatar: "images/testimonial-cus-avatar",
      name: "Gigi Hadid",
      jobTitle: "Operations Manager",
      feedback:
        "Working with XPressGuards has helped our Hotel in so many ways. XPressGuards is reasonably priced and highly respected in Los Angeles. The first thing that caught our attention was the way everyone was so knowledgeable and very professional. First class security company."
    }
  ]
  const [currentCard, setCurrentCard] = useState(0)
  const handleClick = (i: number) => {
    setCurrentCard(i)
  }
  return (
    <section className='relative overflow-hidden bg-[#F3F3F3] w-screen h-screen py-4 font-headings font-bold'>
      <img src={getImageUrl("images/testimonial-maps.png")} alt='maps' className='absolute lg:w-[50vw] lg:left-1/4' />
      <p className='text-header text-[17px] lg:pl-[8%] px-6 mt-[10%] mb-9'>Testimonials</p>
      <p className='w-5/6 text-[23px] lg:text-[40px] lg:w-1/3 px-6 lg:pl-[8%]'>What Our Clients Say About Us</p>
      <div
        className='absolute flex top-[40%] px-6 gap-8 duration-300 lg:top-[25%] lg:w-1/2 lg:right-[8%] lg:'
        style={{ transform: window.innerWidth >= 1024 ? "translatex(0)" : `translateX(-${currentCard * 33}%)` }}
      >
        {data.map((d, i) => (
          <Card key={i} testimonial={data[i]} index={i} currentCard={currentCard} />
        ))}
      </div>
      <div className='absolute flex w-full bottom-[5%] justify-center lg:right-[4%]'>
        {data.map((d, i) => (
          <Circle
            key={i}
            color='#1E56F8'
            className={`${currentCard === i ? "bg-[#1E56F8] rounded-full" : ""}`}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonial
