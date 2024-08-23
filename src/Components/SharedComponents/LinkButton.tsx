import { heroStyle } from "@/Styles/HomeStyle"
import { I_Props_LinkButton } from "@/Types/CustomerTypes"
import { MoveRight } from "lucide-react"
import React from "react"

const LinkButton = ({ text, large, transparent, fullBg }: I_Props_LinkButton) => {
  return (
    <div className={`${heroStyle.linkButton} ${fullBg ? "bg-header mt-[3%]" : ""}`}>
      <p className={large ? "lg:px-10 px-2" : ""}>{text}</p>
      <button
        className={`${transparent || fullBg ? "bg-transparent border-none lg:w-20 lg:h-12 w-8 h-8" : "bg-header border border-white"}  rounded-full lg:w-16 lg:h-16 w-10 h-10 flex justify-center items-center`}
      >
        <MoveRight color={transparent || fullBg ? "white" : "black"} />
      </button>
    </div>
  )
}

export default LinkButton
