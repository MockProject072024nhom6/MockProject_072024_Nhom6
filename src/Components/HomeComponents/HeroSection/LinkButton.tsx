import { ChangeColor, Scale } from "@/Components/Motion/Motion"
import { I_Props_LinkButton } from "@/Types/CustomerTypes"
import React from "react"

const LinkButton = ({ text, large }: I_Props_LinkButton) => {
  return <Scale text={text} large={large} link='' children={<ChangeColor />} />
}

export default LinkButton
