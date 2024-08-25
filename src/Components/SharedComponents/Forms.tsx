import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import Input from "./Input"
import { I_Props_Forms } from "../../Types/GuardTypes"

export default function Forms({ label, name, value, handleChange, type, flex, disabled }: I_Props_Forms) {
  return (
    <div className={`md:${flex} block items-center gap-20 my-2`}>
      <label className='font-headings w-[15%]'>{label}</label>
      <Input
        className={`${guardStyle.inputStyle} w-full`}
        type={type ? type : "text"}
        name={name}
        value={value}
        placeholder={`Enter your ${label}`}
        handleChange={handleChange}
        multiple={type === "file"}
        disabled={disabled}
      />
    </div>
  )
}
