import React from "react"
import HeaderStaff from "../../ComponentsStaff/HeaderStaff"
import NavbarStaff from "../../ComponentsStaff/NavbarStaff"
import ContractStaff from "../ContractStaff"
import { user, userList } from "../../Arrays/Arrays"

export default function MaintainPrice() {
  return (
    <div className='flex flex-col h-screen'>
      {/* Header */}
      <div className='w-full'>
        <HeaderStaff userName={user.name} userLocation={user.location} userImageSrc={user.imageSrc} />
      </div>

      <div className='flex flex-1'>
        {/* Navbar */}
        <div className='w-1/4 lg:w-1/5'>
          <NavbarStaff />
        </div>

        {/* Main Content */}
        <div className='flex-1 p-4'>
          <ContractStaff data={userList} />
        </div>
      </div>
    </div>
  )
}
