import React from "react"

export default function Select({ name, value, option1, option2, handleChange }: I_Props_Select) {
  return (
    <>
      <select name={name} value={value} onChange={handleChange} className='outline-none'>
        <option>{option1}</option>
        <option>{option2}</option>
      </select>
    </>
  )
}
