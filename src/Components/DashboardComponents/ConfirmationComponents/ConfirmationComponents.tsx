import React from "react"
import InfoConfirm from "../../SharedComponents/InfoConfirm"
import Image from "../../SharedComponents/Image"
import { useAppSelector } from "../../../ReduxToolkit/Store"
import { guardStyle } from "../../../Styles/GuardStyle"
import Button from "../../SharedComponents/Button"
import { I_Profile_Billing, I_Props_ConfirmationComponents } from "../../../Types/GuardTypes"

export default function ConfirmationComponents({ onEdit }: I_Props_ConfirmationComponents): JSX.Element {
  const { avatarImage, profileData, billingAddressData } = useAppSelector(state => state.DashboardSlice)
  const combinedData: I_Profile_Billing = { ...profileData, ...billingAddressData }
  return (
    <section className={`${guardStyle.form} mt-16 relative h-96`}>
      <div className='absolute -top-14 sm:left-[40%] left-[34%]'>
        <Image
          src={avatarImage}
          alt='Avatar logo'
          width='120'
          height='120'
          flex='flex'
          justify='justify-center'
          rounded='rounded-full'
        />
        {Object.keys(combinedData).map(key => (
          <InfoConfirm key={key} label={key} value={combinedData[key]} />
        ))}
      </div>
      <Button name='Save in draff' className='absolute right-16 -bottom-14' />
      <Button name='Edit' className='absolute right-0 -bottom-14' type='primary' onClick={onEdit} />
    </section>
  )
}
