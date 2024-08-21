import { heroStyle } from "@/Styles/HomeStyle"
import { MoveRight } from "lucide-react"
import React from "react"

const LinkButton = ({ text, large }: I_Props_LinkButton) => {
  return (
    <div className={heroStyle.linkButton}>
      <p className={large ? "lg:px-10 px-2" : ""}>{text}</p>
      <button className='bg-header border border-white rounded-full lg:w-16 lg:h-16 w-10 h-10 flex justify-center items-center'>
        <MoveRight color='black' />
      </button>
    </div>
  )
}

export default LinkButton
