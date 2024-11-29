import React from "react"
import { guardStyle } from "../../Styles/GuardStyle"
import { workingScheduleData } from "../../Arrays/Arrays"
import Tables from "../../Components/SharedComponents/Table"
import ColumnWorkingSchedule from "../../Components/WorkingSchedulePageComponents/ScheduleDetailsComponents/ColumnWorkingSchedule"
import FormMission from "../../Components/WorkingSchedulePageComponents/MissionDetailsComponents/FormMission"
import NavbarSchedule from "../../Components/WorkingSchedulePageComponents/ScheduleDetailsComponents/NavbarSchedule"

export default function WorkingSchedulePage() {
  const column = ColumnWorkingSchedule()
  return (
    <section>
      <div className={guardStyle.container}>
        <h3 className={guardStyle.headingSchedule}>schedule details</h3>
        <div className={`${guardStyle.inputStyle} overflow-x-auto`}>
          <NavbarSchedule />
          <Tables columns={column} data={workingScheduleData} />
        </div>
        <h3 className={guardStyle.headingSchedule}>Mission Details</h3>
        <FormMission />
      </div>
    </section>
  )
}
