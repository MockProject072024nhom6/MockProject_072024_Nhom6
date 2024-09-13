import React, { useState } from "react"
import { Button, Popover } from "antd"
import { getImageUrl } from "@/Utils/unltis"
import { ClickContent } from "@/Components/ChatComponent/ClickContent"

const Chat: React.FC = () => {
  const [clicked, setClicked] = useState(false)
  const [hovered, setHovered] = useState(false)

  const hide = () => {
    setClicked(false)
    setHovered(false)
  }

  const handleHoverChange = (open: boolean) => {
    setHovered(open)
    setClicked(false)
  }

  const handleClickChange = (open: boolean) => {
    setHovered(false)
    setClicked(open)
  }

  const hoverContent = <div>Leave a message</div>

  return (
    <Popover
      className='fixed bottom-3 right-3 border-none p-3'
      content={hoverContent}
      trigger='hover'
      open={hovered}
      onOpenChange={handleHoverChange}
    >
      <Popover
        content={<ClickContent onClick={hide} />}
        trigger='click'
        open={clicked}
        onOpenChange={handleClickChange}
      >
        <Button className='w-[50px] h-[50px]' type='primary' shape='circle'>
          <img src={getImageUrl("images/chat-icon.png")} alt='chat-icon' className='w-[20px]' />
        </Button>
      </Popover>
    </Popover>
  )
}

export default Chat
