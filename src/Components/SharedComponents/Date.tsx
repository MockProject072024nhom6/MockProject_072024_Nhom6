import { DatePicker, DatePickerProps } from "antd"
import React from "react"

export default function Date({ label, placeholder, className, disabled }: I_Props_Date) {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString)
  }
  return (
    <div className={className}>
      <label className='block'>{label}</label>
      <DatePicker onChange={onChange} placeholder={placeholder} disabled={disabled} />
    </div>
  )
}
