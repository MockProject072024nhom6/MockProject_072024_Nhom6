import React from "react"
import AvatarForm from "../SharedComponents/AvatarForm"
import InfoConfirm from "../SharedComponents/InfoConfirm"

export default function ConfirmationComponents() {
  return (
    <section>
      <AvatarForm justify='justify-center' />
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
    </section>
  )
}
