import { PencilIcon } from "lucide-react"
import React, { useRef } from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import { handleFileChange, handleUploadImage } from "../../Utils/HandleFunctions"
import userImage from "../../Assets/user-image.png"
import Image from "./Image"

export default function AvatarForm({ avatar, justify, gap }: I_Props_AvatarForm) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  return (
    <div className={`flex items-center ${justify} ${gap}`}>
      <label>{avatar}</label>
      <div className='relative'>
        <Image
          src={userImage}
          alt='user image'
          width='100'
          height='100'
          border='border-2'
          rounded=' rounded-full'
          padding=' p-2'
          marginL='ms-14'
        />
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
