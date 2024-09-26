import { Flex, Button as CustomButton } from "antd"
import React from "react"
import { I_Props_Button } from "../../Types/GuardTypes"

export default function Button({ name, className, type, onClick, isValid, dirty }: I_Props_Button): JSX.Element {
  return (
    <Flex gap='small' wrap className={className}>
      <CustomButton type={type} onClick={onClick} disabled={!isValid || !dirty}>
        {name}
      </CustomButton>
    </Flex>
  )
}
