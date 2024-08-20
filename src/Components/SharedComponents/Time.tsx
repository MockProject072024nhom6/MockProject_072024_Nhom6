import React from "react"
import type { DatePickerProps } from "antd"
import { DatePicker, Space } from "antd"

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString)
}
export default function Time({ label, placeholder, disabled }: I_Props_Time): JSX.Element {
  return (
    <Space direction='vertical'>
      <label>{label}</label>
      <DatePicker onChange={onChange} picker='time' placeholder={placeholder} disabled={disabled} />
    </Space>
  )
}
