import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import ColumnDayOffComponents from "../../Components/DayOffComponents/ColumnDayOffComponents/ColumnDayOffComponents"
import { dayOffData } from "../../Arrays/Arrays"
import TableDayOffComponents from "../../Components/DayOffComponents/TableDayOffComponents/TableDayOffComponents"
import FormDayOffComponents from "../../Components/DayOffComponents/TableDayOffComponents/FormDayOffComponents"

export default function DayOffPage() {
  return (
    <section>
      <div className={guardStyle.container}>
        <div className='flex gap-10'>
          <TableDayOffComponents columnDayOffComponents={ColumnDayOffComponents} dayOffData={dayOffData} />
          <FormDayOffComponents />
        </div>
      </div>
    </section>
  )
}
