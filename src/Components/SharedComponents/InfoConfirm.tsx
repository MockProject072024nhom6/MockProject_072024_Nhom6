import React from "react"
import { I_Props_InfoConfirm } from "../../Types/GuardTypes"
import Input from "./Input"

export default function InfoConfirm({ label, value, disabled }: I_Props_InfoConfirm) {
  return (
    <div className='flex justify-center gap-5'>
      <label className={`capitalize ${label === "avatar" ? "hidden" : "block"}`}>{label}:</label>
      <Input value={value} disabled={disabled} className={`${label === "avatar" ? "hidden" : "block"} font-medium`} />
    </div>
  )
}
