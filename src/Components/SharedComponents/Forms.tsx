import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import Input from "./Input"

export default function Forms({ label, name, value, handleChange, type }: I_Props_Forms) {
  return (
    <div className='flex items-center gap-20 my-5'>
      <label className='font-headings w-[15%]'>{label}</label>
      <Input
        className={guardStyle.inputStyle}
        type={type ? type : "text"}
        name={name}
        value={value}
        placeholder={`Enter your ${label}`}
        handleChange={handleChange}
        multiple={type === "file"}
      />
    </div>
  )
}
