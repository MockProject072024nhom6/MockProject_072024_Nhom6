import { Flex, Button as CustomButton } from "antd"
import React from "react"

export default function Button({ name, position, type, onClick }: I_Props_Button): JSX.Element {
  return (
    <Flex gap='small' wrap className={position}>
      <CustomButton type={type} onClick={onClick}>
        {name}
      </CustomButton>
    </Flex>
  )
}
