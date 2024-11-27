import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import ColumnDayOff from "../../Components/DayOffComponents/TableDayOffComponents/ColumnDayOff"
import TableDayOff from "../../Components/DayOffComponents/TableDayOffComponents/TableDayOff"
import { dayOffData } from "../../Arrays/Arrays"
import FormDayOff from "../../Components/DayOffComponents/FormDayOffComponents/FormDayOff"

export default function DayOffPage(): JSX.Element {
  const column = ColumnDayOff()
  return (
    <section>
      <div className={guardStyle.container}>
        <div className={guardStyle.flexLG}>
          <TableDayOff column={column} data={dayOffData} />
          <FormDayOff />
        </div>
      </div>
    </section>
  )
}
