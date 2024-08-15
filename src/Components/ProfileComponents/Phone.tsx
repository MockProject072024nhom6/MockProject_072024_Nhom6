import React from "react"
import Select from "../SharedComponents/Select"
import Forms from "../SharedComponents/Forms"

export default function Phone({ label, name, value, device, handleChange }: I_Props_Forms) {
  return (
    <div className='flex gap-10'>
      <Forms label={label} name={name} value={value} handleChange={handleChange} />
      <Select name='device' value={device} option1='Mobile' option2='Smart phone' handleChange={handleChange} />
    </div>
  )
}
