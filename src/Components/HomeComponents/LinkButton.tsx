import { heroStyle } from "@/Styles/HomeStyle"
import { MoveRight } from "lucide-react"
import React from "react"

const LinkButton = ({ text, large }: I_Props_LinkButton) => {
  return (
    <div className={heroStyle.linkButton}>
      <p className={large && "px-10"}>{text}</p>
      <button className='bg-header border border-white rounded-full w-16 h-16 '>
        <MoveRight color='black' />
      </button>
    </div>
  )
}

export default LinkButton
