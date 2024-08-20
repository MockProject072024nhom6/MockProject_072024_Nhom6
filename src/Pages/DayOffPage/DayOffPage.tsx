import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import FormDayOffComponents from "../../Components/DayOffComponents/FormDayOffComponents/FormDayOff"
import ColumnDayOff from "../../Components/DayOffComponents/TableDayOffComponents/ColumnDayOff"
import TableDayOff from "../../Components/DayOffComponents/TableDayOffComponents/TableDayOff"
import { dayOffData } from "../../Arrays/Arrays"

export default function DayOffPage(): JSX.Element {
  const column = ColumnDayOff()
  return (
    <section>
      <div className={guardStyle.container}>
        <div className='flex gap-10'>
          <TableDayOff column={column} data={dayOffData} />
          <FormDayOffComponents />
        </div>
      </div>
    </section>
  )
}
