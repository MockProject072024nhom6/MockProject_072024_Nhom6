import { PencilIcon } from "lucide-react"
import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import { handleFileExplorerOpen, handleImageUpload } from "../../Utils/HandleFunctions"
import Image from "./Image"
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Store"

export default function AvatarForm({ avatar, justify, gap, setFieldValue }: I_Props_AvatarForm): JSX.Element {
  const { avatarImage } = useAppSelector(state => state.DashboardSlice)
  const dispatch = useAppDispatch()
  return (
    <div className={`flex items-center ${justify} ${gap}`}>
      <label>{avatar}</label>
      <div className='relative'>
        <Image
          src={avatarImage}
          alt='user image'
          width='100'
          height='100'
          border='border-2'
          rounded=' rounded-full'
          padding=' p-2'
          marginL='ms-14'
        />
        <PencilIcon className={guardStyle.pencilIcon} onClick={handleFileExplorerOpen} />
        <input
          name='avatar'
          type='file'
          id='fileInput'
          accept='image/jpg,image/png,image/jpeg'
          onChange={e => {
            setFieldValue ? handleImageUpload(e, setFieldValue, dispatch) : ""
          }}
          className='hidden' // Hidden input file
        />
      </div>
    </div>
  )
}
