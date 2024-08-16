import React from "react"
import Select from "../SharedComponents/Select"

export default function AddressLine1Components({ list, value, handleChange }: I_Props_AddressLine1) {
  return (
    <div className='flex gap-10 items-center'>
      <label>Address Line 1</label>
      <Select
        name='addressLine1'
        value={value}
        handleChange={handleChange}
        list={list}
        width='w-full'
        border='border'
      />
    </div>
  )
}
