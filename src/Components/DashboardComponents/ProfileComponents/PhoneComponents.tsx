import React from "react"
import Select from "../../SharedComponents/Select"
import Forms from "../../SharedComponents/Forms"
import { deviceList } from "../../../Arrays/Arrays"
import { guardStyle } from "../../../Styles/GuardStyle"
import { I_Props_Forms } from "../../../Types/GuardTypes"

export default function PhoneComponents({ label, name, value, device, handleChange }: I_Props_Forms) {
  return (
    <div className={guardStyle.flexSM}>
      <Forms label={label} name={name} value={value} handleChange={handleChange} flex='flex' />
      <Select name='device' value={device} list={deviceList} handleChange={handleChange} />
    </div>
  )
}
