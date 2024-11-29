import TextArea from "antd/es/input/TextArea"
import React, { useState } from "react"

export default function TextAreas({ label, placeholder, minRows, value, disabled }: I_Props_TextArea) {
  const [values, setValues] = useState("")
  return (
    <>
      <label className='font-bold'>{label}</label>
      <TextArea
        value={value ? value : values}
        onChange={e => setValues(e.target.value)}
        placeholder={placeholder}
        autoSize={{ minRows: minRows }}
        disabled={disabled}
      />
    </>
  )
}
