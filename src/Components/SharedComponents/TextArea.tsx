import TextArea from "antd/es/input/TextArea"
import React, { useState } from "react"

export default function TextAreas({ label, placeholder, minRows }: I_Props_TextArea) {
  const [value, setValue] = useState("")
  return (
    <>
      <label className='font-bold'>{label}</label>
      <TextArea
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        autoSize={{ minRows: minRows }}
      />
    </>
  )
}
