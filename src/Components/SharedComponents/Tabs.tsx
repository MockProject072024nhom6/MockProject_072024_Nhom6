import React from "react"
import { Tabs as Tab } from "antd"
import TabPane from "antd/es/tabs/TabPane"
import ProfileComponents from "../ProfileComponents/ProfileComponents"
import BillingAddressComponents from "../BillingAddressComponents/BillingAddressComponents"
import ConfirmationComponents from "../ConfirmationComponents/ConfirmationComponents"

export default function Tabs({ profile, billingAddress, confirmation }: I_Props_Tabs): JSX.Element {
  return (
    <Tab type='card' defaultActiveKey='1'>
      <TabPane tab={<>{profile}</>} key='1'>
        <ProfileComponents />
      </TabPane>
      <TabPane tab={<>{billingAddress}</>} key='2'>
        <BillingAddressComponents />
      </TabPane>
      <TabPane tab={<>{confirmation}</>} key='3'>
        <ConfirmationComponents />
      </TabPane>
    </Tab>
  )
}
