import React from "react"
import Select from "../../SharedComponents/Select"
import Forms from "../../SharedComponents/Forms"
import { guardStyle } from "../../../Styles/GuardStyle"
import { I_Props_Location } from "../../../Types/GuardTypes"

export default function LocationComponents({
  list,
  locationValue,
  cityValue,
  stateValue,
  handleChange
}: I_Props_Location) {
  return (
    <>
      <div className={guardStyle.flexSM}>
        <label>Location</label>
        <Select
          list={list}
          name='location'
          value={locationValue}
          width='w-full'
          border='border'
          handleChange={handleChange}
        />
      </div>
      <Forms label='City' name='city' value={cityValue} handleChange={handleChange} flex='flex' />
      <Forms label='State' name='state' value={stateValue} handleChange={handleChange} flex='flex' />
    </>
  )
}
