import React from "react"
import { I_Props_ErrorMessage } from "../../Types/GuardTypes"

export default function ErrorMessage({ error }: I_Props_ErrorMessage): JSX.Element {
  return <>{error && <p className='text-red-500'>{error}</p>}</>
}
