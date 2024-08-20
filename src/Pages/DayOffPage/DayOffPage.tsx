import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import ColumnDayOffComponents from "../../Components/DayOffComponents/TableDayOffComponents/ColumnDayOffComponents"
import { dayOffData } from "../../Arrays/Arrays"
import TableDayOffComponents from "../../Components/DayOffComponents/TableDayOffComponents/TableDayOffComponents"
import FormDayOffComponents from "../../Components/DayOffComponents/FormDayOffComponents/FormDayOffComponents"

export default function DayOffPage() {
  const column = ColumnDayOffComponents()
  return (
    <section>
      <div className={guardStyle.container}>
        <div className='flex gap-10'>
          <TableDayOffComponents column={column} data={dayOffData} />
          <FormDayOffComponents />
        </div>
      </div>
    </section>
  )
}
