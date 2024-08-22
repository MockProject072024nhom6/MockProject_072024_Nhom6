import React from "react"
import { I_Props_InfoConfirm } from "../../Types/GuardTypes"

export default function InfoConfirm({ label, value }: I_Props_InfoConfirm) {
  return (
    <div className='flex justify-center gap-5'>
      <label className='capitalize'>{label}:</label>
      <strong>{value}</strong>
    </div>
  )
}
