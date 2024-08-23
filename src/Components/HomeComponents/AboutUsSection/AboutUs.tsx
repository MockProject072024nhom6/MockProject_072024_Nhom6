import { clientLogo, questions } from "@/Arrays/CustomerArrays"
import { getImageUrl } from "@/Utils/unltis"
import { ChevronRight } from "lucide-react"
import React from "react"

const AboutUs = () => {
  return (
    <section className='flex flex-col items-center font-semibold font-headings bg-white'>
      <div className='w-screen flex flex-col lg:flex-row justify-center lg:gap-10 lg:items-start '>
        <div className='text-center'>
          <p className='text-header text-[16px] mt-6 mb-2 '>About Us</p>
          <p className='text-[24px] mb-6'>XPressGuards Security</p>
          <div className='flex flex-col px-4 text-[18px] items-start gap-6'>
            {questions.map((q, i) => (
              <React.Fragment key={i}>
                {window.innerWidth >= 1240 ? (
                  <div className='flex justify-between w-[40vw]'>
                    <p className='text-lg cursor-pointer'>{q}</p>
                    <ChevronRight color='#1E56F8' />
                  </div>
                ) : (
                  <p className='text-lg cursor-pointer'>{q}</p>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className='text-center'>
          <p className='text-header text-[16px] mt-[20%] lg:mt-6 mb-2'>Happy Clients</p>
          <p className='text-[24px]'>Clients We've Worked With</p>
          <div className='justify-items-center grid grid-cols-2 lg:grid-cols-3'>
            {clientLogo.map((l, i) => (
              <img key={i} src={getImageUrl(l)} alt='logo' />
            ))}
          </div>
        </div>
      </div>
      <img src={getImageUrl("images/video-thumbnail.png")} alt='thumbnail' className='my-[15%] lg:my-[5%] lg:w-1/2' />
    </section>
  )
}

export default AboutUs
