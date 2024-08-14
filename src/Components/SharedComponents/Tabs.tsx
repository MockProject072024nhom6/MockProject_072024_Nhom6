import React from "react"
import { Tabs as Tab } from "antd"
import TabPane from "antd/es/tabs/TabPane"
import Profile from "./Profile"

export default function Tabs({ profile, billingAddress, confirmation }: I_Props_Tabs): JSX.Element {
  return (
    <Tab type='card' defaultActiveKey='1'>
      <TabPane tab={<>{profile}</>} key='1'>
        <Profile
          avatar='Avatar'
          fullName='Full Name'
          email='Email'
          phone='Phone'
          organization='Organization'
          department='Department'
          accountType='Account Type'
        />
      </TabPane>
      <TabPane tab={<>{billingAddress}</>} key='2'>
        <span className=''>34</span>
      </TabPane>
      <TabPane tab={<>{confirmation}</>} key='3'>
        56
      </TabPane>
    </Tab>
  )
}
