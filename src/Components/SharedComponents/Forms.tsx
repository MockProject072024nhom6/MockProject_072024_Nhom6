import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"

export default function Forms({ label, name, value, handleChange, type }: I_Props_Forms) {
  return (
    <div className='flex items-center gap-20 my-5'>
      <label className='font-headings w-[15%]'>{label}</label>
      <input
        className={guardStyle.inputStyle}
        type={type ? type : "text"}
        name={name}
        value={value}
        placeholder={`Enter your ${label}`}
        onChange={handleChange}
        multiple={type === "file"}
      />
    </div>
  )
}
