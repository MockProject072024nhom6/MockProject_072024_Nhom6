import { Field } from "formik"
import React from "react"

export default function Forms({ label, name, value, onChange }: I_Props_Forms) {
  return (
    <div>
      <label className='font-headings'>{label}</label>
      <Field name={name} />
    </div>
  )
}
