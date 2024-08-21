import React from "react"
import Input from "../../SharedComponents/Input"
import Tables from "../../SharedComponents/Table"
import { guardStyle } from "../../../Styles/GuardStyle"
import { I_Props_TableDayOff } from "../../../Types/GuardTypes"

export default function TableDayOff({ column, data }: I_Props_TableDayOff) {
  return (
    <div className={`${guardStyle.form} px-5 overflow-x-auto`}>
      <h3 className='font-bold text-xl'>List of leave applications</h3>
      <div className='flex justify-between gap-10 my-3'>
        <Input placeholder='Search...' className={guardStyle.inputStyle} />
        <p className='text-xl'>Filter</p>
        <Input placeholder='Status' className={guardStyle.inputStyle} />
      </div>
      <Tables columns={column} data={data} />
    </div>
  )
}
