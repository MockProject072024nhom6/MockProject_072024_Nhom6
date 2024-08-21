import React from "react"
import { Space } from "antd"
import Date from "../../SharedComponents/Date"
import { guardStyle } from "../../../Styles/GuardStyle"
import TextAreas from "../../SharedComponents/TextArea"
import Button from "../../SharedComponents/Button"

export default function FormDayOff() {
  return (
    <Space direction='vertical'>
      <div className='lg:block flex lg:gap-0 md:gap-80 sm:gap-20 gap-10 lg:my-0 my-5'>
        <Date
          label='Start Date'
          placeholder='Start date'
          className={`${guardStyle.inputStyle} flex gap-10 items-center`}
        />
        <Date
          label='End Date'
          placeholder='End date'
          className={`${guardStyle.inputStyle} flex gap-10 items-center lg:my-10 my-0`}
        />
      </div>
      <TextAreas label='Reason' placeholder='Reason' minRows={8} />
      <Button name='Send' className='flex justify-end' />
    </Space>
  )
}
