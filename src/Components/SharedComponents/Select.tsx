import React from "react"
import { I_Props_Select } from "../../Types/GuardTypes"

export default function Select({ name, value, handleChange, list, width, border }: I_Props_Select) {
  return (
    <>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={`outline-none rounded-md p-2 ${width} ${border}`}
      >
        {list?.map((item, index) => <option key={index}>{item}</option>)}
      </select>
    </>
  )
}
