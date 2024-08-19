import React from "react"
import InfoConfirm from "../SharedComponents/InfoConfirm"
import Image from "../SharedComponents/Image"
import { useAppSelector } from "../../ReduxToolkit/Store"
import { guardStyle } from "../../Styles/GuardStyle"
import Button from "../SharedComponents/Button"

export default function ConfirmationComponents({ onEdit }: I_Props_ConfirmationComponents): JSX.Element {
  const { avatarImage } = useAppSelector(state => state.DashboardSlice)
  return (
    <section className={`${guardStyle.form} mt-16 relative h-96`}>
      <div className='absolute -top-14 left-[40%]'>
        <Image src={avatarImage} alt='Avatar logo' width='120' height='120' flex='flex' justify='justify-center' />
        <InfoConfirm label='full name' />
        <InfoConfirm label='email' />
        <InfoConfirm label='phone' />
        <InfoConfirm label='organization' />
        <InfoConfirm label='department' />
        <InfoConfirm label='account type' />
        <InfoConfirm label='country' />
        <InfoConfirm label='city' />
        <InfoConfirm label='state' />
        <InfoConfirm label='address line 1' />
        <InfoConfirm label='experience' />
        <InfoConfirm label='zip code' />
      </div>
      <Button name='Save in draff' position='absolute right-16 -bottom-14' />
      <Button name='Edit' position='absolute right-0 -bottom-14' type='primary' onClick={onEdit} />
    </section>
  )
}
