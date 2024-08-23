import { offerAt, reasonToChoose } from "@/Arrays/CustomerArrays"
import LinkButton from "@/Components/SharedComponents/LinkButton"
import { I_Props_Offer } from "@/Types/CustomerTypes"
import { getImageUrl } from "@/Utils/unltis"
import React from "react"

const Offer = ({ serviceType }: { serviceType: I_Props_Offer }) => {
  return (
    <section className='relative w-screen flex flex-col justify-center font-headings h-auto lg:max-h-[250vh] bg-black'>
      <img
        src={getImageUrl("images/service-offer-bg.png")}
        alt='background'
        className='lg:max-h-[250vh] h-[210vh] lg:object-cover lg:w-screen'
      />
      <div className='absolute top-[3%] flex flex-col lg:flex-row lg:justify-center lg:items-start items-center lg:mx-[8%] lg:mt-[2%] lg:gap-[2%]'>
        {/* image  */}
        <div className='flex flex-col items-center lg:w-[37.5%]'>
          <img
            src={getImageUrl(serviceType.img1)}
            alt='offer'
            className='w-[25vh] lg:w-full lg:h-auto lg:rounded-none h-[25vh] object-cover rounded-3xl'
          />
          <div className='border-t-2 border-header mt-[5%] mb-[15%] w-2/3 lg:mb-[5%]' />
          <img
            src={getImageUrl(serviceType.img2)}
            alt='offer'
            className='w-[25vh] lg:w-full lg:h-auto lg:rounded-none h-[25vh] object-cover rounded-3xl'
          />
          <div className='border-t-2 border-header mt-[5%] mb-[5%] w-2/3' />
        </div>
        {/* infomation */}
        <div className='flex flex-col items-center gap-2 text-white font-normal lg:font-semibold text-[12px] lg:text-[16px] mb-[5%] lg:items-start lg:w-1/2'>
          <p className='text-header text-[19px] lg:text-[30px] font-bold lg:ml-3'>{serviceType.type} Guard Services</p>
          <div className='flex flex-col items-start gap-[10px] pl-3 pr-[10%]'>
            <p>
              Are you still looking for the best Enterprise Security company in the United States? Look no further. Our
              nationwide personal guards are available 24/7 to protect you, your family, and clients. We’re fully
              licensed and insured.
            </p>
            <p>
              At XPressGuards, we take your {serviceType.type} very seriously. Hiring a personal 
              <span className='text-header'> {serviceType.type}</span>  will help you protect yourself and your family
              members.
            </p>
            <div>
              <span className='font-semibold'>You Should Hire Our {serviceType.type} Team If:</span>
              <ul className='list-disc px-[10%]'>
                {reasonToChoose.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
            <p>
              Working with our {serviceType.type} teams, at XPressGuards, decreases the likelihood of a crime taking
              place. If you’re looking for the best way to provide safety and insurance against harm, contact our event
              security team now.
            </p>
            <div>
              <span>We offer {serviceType.type} At:</span>
              <ul className='list-disc pl-[10%]'>
                {offerAt.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
            <span className='font-bold'>Contact XPressGuards Now</span>
            <p>
              We offer high-quality {serviceType.type} services throughout the nation, ranging from executives,
              families, and entertainers. XPressGuards has also been in the {serviceType.type} industry for twenty-four
              years, so we have plenty of experience in any situation imaginable. We offer armed or unarmed event
              security, and we’re available 24/7. Whatever your needs are, we have the expertise to handle it
              professionally. We have over six hundred locations to serve your needs in all 50 states. You can contact
              us now using our contact form, or call us 24/7.
              <br /> Request a quote now and discover how XPressGuards can help you secure you and your family.
            </p>
          </div>
          <LinkButton text='(084) 299-002' transparent={true} />
          <LinkButton text='View Price Server Now' fullBg={true} />
        </div>
      </div>
    </section>
  )
}

export default Offer
