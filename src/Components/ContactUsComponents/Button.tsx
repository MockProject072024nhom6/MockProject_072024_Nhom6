import React from "react"
import { I_props_Button } from "../../Types/GuardTypes"

const Button: React.FC<I_props_Button> = ({ label, onClick }) => {
  return (
    <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg' onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
