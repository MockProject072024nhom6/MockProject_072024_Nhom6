import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"

export default function Forms({ label, name, value, handleChange }: I_Props_Forms) {
  return (
    <div className='flex gap-20 items-center my-5'>
      <label className='font-headings'>{label}</label>
      <input
        className={guardStyle.inputStyle}
        type='text'
        name={name}
        value={value}
        placeholder={`Enter your ${label}`}
        onChange={handleChange}
      />
    </div>
  )
}
