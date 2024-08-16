import { PencilIcon } from "lucide-react"
import React, { useRef } from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import { handleFileChange, handleUploadImage } from "../../Utils/HandleFunctions"

export default function AvatarForm({ avatar, userImage }: I_Props_AvatarForm) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  return (
    <div className='flex gap-20 items-center relative'>
      <label>{avatar}</label>
      <div className='relative'>
        <img src={userImage} alt='user image' width={100} height={100} className='border-2 rounded-full p-2 ms-14' />
        <PencilIcon
          className={guardStyle.pencilIcon}
          onClick={() => {
            handleUploadImage(fileInputRef)
          }}
        />
        <input
          type='file'
          ref={fileInputRef}
          onChange={handleFileChange}
          className='hidden' // Hidden input file
        />
      </div>
    </div>
  )
}
