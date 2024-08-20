import React from "react"
import Input from "../../SharedComponents/Input"
import Tables from "../../SharedComponents/Table"
import { guardStyle } from "../../../Styles/GuardStyle"

export default function TableDayOffComponents({ columnDayOffComponents, dayOffData }: I_Props_TableDayOffComponents) {
  const columns = columnDayOffComponents()
  return (
    <div className={`${guardStyle.form} px-5`}>
      <h3 className='font-bold text-xl'>List of leave applications</h3>
      <div className='flex justify-between my-3'>
        <Input placeholder='Search...' className={guardStyle.inputStyle} />
        <p className='text-xl'>Filter</p>
        <Input placeholder='Status' className={guardStyle.inputStyle} />
      </div>
      <Tables columns={columns} data={dayOffData} />
    </div>
  )
}
