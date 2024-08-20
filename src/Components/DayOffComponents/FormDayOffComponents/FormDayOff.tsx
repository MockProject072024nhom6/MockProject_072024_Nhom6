import React from "react"
import { Space } from "antd"
import Date from "../../SharedComponents/Date"
import { guardStyle } from "../../../Styles/GuardStyle"
import TextAreas from "../../SharedComponents/TextArea"
import Button from "../../SharedComponents/Button"

export default function FormDayOffComponents() {
  return (
    <Space direction='vertical'>
      <Date
        label='Start Date'
        placeholder='Start date'
        className={`${guardStyle.inputStyle} flex gap-10 items-center`}
      />
      <Date
        label='End Date'
        placeholder='End date'
        className={`${guardStyle.inputStyle} flex gap-10 items-center my-10`}
      />
      <TextAreas label='Reason' placeholder='Reason' minRows={8} />
      <Button name='Send' className='flex justify-end' />
    </Space>
  )
}
