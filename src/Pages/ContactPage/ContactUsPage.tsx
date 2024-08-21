import React from "react"
import HeaderInPageHome from "../../Components/ShareComponents/HeaderInPageHome"
import ContactForm from "../../Components/ContactUsComponents/ContactForm"
import ContactLocations from "../../Components/ContactUsComponents/ContactLocations"
import BusinessInfo from "../../Components/ContactUsComponents/BusinessInfo"

const ContactUsPage: React.FC = () => {
  return (
    <>
      {/* <Header /> */}
      <main className='bg-white m-0 p-0'>
        <HeaderInPageHome title={"Contact Us"} subtitle={"Contact Us"} page={"Home"} />

        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 mx-10 p-20'>
            <ContactForm />
            <ContactLocations />
          </div>
          <BusinessInfo />
        </div>
      </main>
    </>
  )
}

export default ContactUsPage
