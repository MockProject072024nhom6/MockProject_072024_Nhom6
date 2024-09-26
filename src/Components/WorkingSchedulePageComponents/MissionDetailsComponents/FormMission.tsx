import React from "react"
import Forms from "../../SharedComponents/Forms"
import Date from "../../SharedComponents/Date"
import Time from "../../SharedComponents/Time"
import TextAreas from "../../SharedComponents/TextArea"
import { missionDescription } from "../../../Objects/Objects"

export default function FormMission() {
  return (
    <div>
      <Forms label='Event' name='event' value='EVENT MONITORING' type='text' disabled={true} />
      <div className='flex items-center justify-between'>
        <Date label='Date' placeholder='2024-08-21' className='flex-col' disabled={true} />
        <Time label='Time' placeholder='17:00' disabled={true} />
      </div>
      <Forms label='Customer' name='customer' value='Ignition Group Event Company' type='text' disabled={true} />
      <TextAreas label='Detailed description' value={missionDescription} disabled={true} />
    </div>
  )
}
