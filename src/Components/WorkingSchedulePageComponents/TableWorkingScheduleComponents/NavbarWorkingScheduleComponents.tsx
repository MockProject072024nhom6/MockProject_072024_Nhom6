import React from "react"
import Input from "../../SharedComponents/Input"
import Select from "../../SharedComponents/Select"
import { guardStyle } from "../../../Styles/GuardStyle"
import { exportList, filterList } from "../../../Arrays/Arrays"

export default function NavbarWorkingScheduleComponents() {
  return (
    <div className='flex justify-between my-3'>
      <Input placeholder='Search Date' className={guardStyle.inputStyle} />
      <Select name='export' value='export' list={exportList} />
      <Select name='filter' value='filter' list={filterList} />
    </div>
  )
}
