import React from "react"
import { Tabs as Tab } from "antd"
import TabPane from "antd/es/tabs/TabPane"
import userImage from "../../Assets/user-image.png"
import ProfileComponents from "../ProfileComponents/Profile"
import BillingAddressComponents from "../BillingAdressComponents/BillingAddressComponents"

export default function Tabs({ profile, billingAddress, confirmation }: I_Props_Tabs): JSX.Element {
  return (
    <Tab type='card' defaultActiveKey='1'>
      <TabPane tab={<>{profile}</>} key='1'>
        <ProfileComponents
          avatar='avatar'
          fullName='fullName'
          email='email'
          phone='phone'
          organization='organization'
          department='department'
          accountType='accountType'
          userImage={userImage}
        />
      </TabPane>
      <TabPane tab={<>{billingAddress}</>} key='2'>
        <BillingAddressComponents />
      </TabPane>
      <TabPane tab={<>{confirmation}</>} key='3'>
        56
      </TabPane>
    </Tab>
  )
}
