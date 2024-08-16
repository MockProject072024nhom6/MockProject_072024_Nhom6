import React from "react"
import Select from "../SharedComponents/Select"
import Forms from "../SharedComponents/Forms"
import { deviceList } from "../../Arrays/Arrays"

export default function Phone({ label, name, value, device, handleChange }: I_Props_Forms) {
  return (
    <div className='flex gap-10'>
      <Forms label={label} name={name} value={value} handleChange={handleChange} />
      <Select name='device' value={device} list={deviceList} handleChange={handleChange} />
    </div>
  )
}
