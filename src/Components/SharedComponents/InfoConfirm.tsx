import React from "react"

export default function InfoConfirm({ label }: I_Props_InfoConfirm) {
  return (
    <div className='flex justify-center gap-10 text-start'>
      <label className='capitalize'>{label}:</label>
      <strong>123</strong>
    </div>
  )
}
