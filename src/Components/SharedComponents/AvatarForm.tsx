import { PencilIcon } from "lucide-react"
import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import { I_Props_AvatarForm } from "../../Types/GuardTypes"

export default function AvatarForm({ avatar, userImage }: I_Props_AvatarForm) {
  return (
    <div className='flex gap-20 items-center relative'>
      <label>{avatar}</label>
      <div className='relative'>
        <img src={userImage} alt='user image' width={100} height={100} className='border-2 rounded-full p-2' />
        <PencilIcon className={guardStyle.pencilIcon} />
      </div>
    </div>
  )
}
