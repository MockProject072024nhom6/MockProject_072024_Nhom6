import React from "react"
import HeaderPageProfile from "../Components/PersonalInformationComponents/HeaderPageProfile"
import SelectInput from "../Components/PersonalInformationComponents/SelectInput"
import EditableButtonInput from "../Components/PersonalInformationComponents/EditableButtonInput"
import Avatar from "../Components/PersonalInformationComponents/Avatar"
import LogoutButton from "../Components/PersonalInformationComponents/LogoutButton"
const PersonalInformationPage: React.FC = () => {
  const options = ["Option 1", "Option 2", "Option 3"]

  return (
    <main>
      <div className='container mx-auto'>
        <Avatar size={150} border='4px solid #007bff' />
      </div>
      <HeaderPageProfile />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-0 mx-32 mt-40 text-black'>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Personal Information</h2>

          <SelectInput initialText={"Your name"} label={"Name"} options={options} />
          <EditableButtonInput initialText='MM/DD/YYYY' label='Birthday' type='date' />
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Contact Information</h2>
          <EditableButtonInput initialText='Enter your number phone' label='Phone' type='text' />
          <EditableButtonInput initialText='Enter your email' label='Email' type='number' />
          <EditableButtonInput initialText='Enter number phone' label='Address' type='text' />
        </div>
        <div>
          <h2 className='text-xl font-semibold mb-4'>Account Information</h2>
          <EditableButtonInput initialText='Enter password' label='Password' type='password' />
        </div>
      </div>
      <LogoutButton />
    </main>
  )
}

export default PersonalInformationPage
