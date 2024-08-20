import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import Tables from "../../Components/SharedComponents/Table"
import ColumnDayOffComponents from "../../Components/DayOffComponents/ColumnDayOffComponents/ColumnDayOffComponents"
import { dayOffData } from "../../Arrays/Arrays"
import TableDayOffComponents from "../../Components/DayOffComponents/TableDayOffComponents/TableDayOffComponents"

export default function DayOffPage() {
  return (
    <section>
      <div className={guardStyle.container}>
        <TableDayOffComponents columnDayOffComponents={ColumnDayOffComponents} dayOffData={dayOffData} />
      </div>
    </section>
  )
}
