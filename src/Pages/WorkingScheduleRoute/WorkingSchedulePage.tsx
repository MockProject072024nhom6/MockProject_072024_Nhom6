import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import TableWorkingScheduleComponents from "../../Components/WorkingSchedulePageComponents/TableWorkingScheduleComponents/TableWorkingScheduleComponents"
import ColumnWorkingScheduleComponents from "../../Components/WorkingSchedulePageComponents/TableWorkingScheduleComponents/ColumnWorkingScheduleComponents"
import { workingScheduleData } from "../../Arrays/Arrays"

export default function WorkingSchedulePage() {
  const column = ColumnWorkingScheduleComponents()
  return (
    <section>
      <div className={guardStyle.container}>
        <div className='flex'>
          <TableWorkingScheduleComponents column={column} data={workingScheduleData} />
        </div>
      </div>
    </section>
  )
}
