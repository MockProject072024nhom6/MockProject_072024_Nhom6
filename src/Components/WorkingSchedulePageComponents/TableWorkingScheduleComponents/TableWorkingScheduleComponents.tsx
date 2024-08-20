import React from "react"
import Tables from "../../SharedComponents/Table"
import { guardStyle } from "../../../Styles/GuardStyle"
import NavbarWorkingScheduleComponents from "./NavbarWorkingScheduleComponents"

export default function TableWorkingScheduleComponents({ column, data }: I_Props_TableWorkingScheduleComponents) {
  return (
    <div>
      <h3 className='uppercase font-bold text-2xl my-3'>schedule details</h3>
      <div className={guardStyle.inputStyle}>
        <NavbarWorkingScheduleComponents />
        <Tables columns={column} data={data} />
      </div>
    </div>
  )
}
