import React, { useState } from "react"
import { Tabs as Tab } from "antd"
import TabPane from "antd/es/tabs/TabPane"
import ProfileComponents from "../DashboardComponents/ProfileComponents/ProfileComponents"
import BillingAddressComponents from "../DashboardComponents/BillingAddressComponents/BillingAddressComponents"
import ConfirmationComponents from "../DashboardComponents/ConfirmationComponents/ConfirmationComponents"
import { I_Props_Tabs } from "../../Types/GuardTypes"

export default function Tabs({ profile, billingAddress, confirmation }: I_Props_Tabs): JSX.Element {
  const [activeKey, setActiveKey] = useState("1")
  const handleTabChange = (key: string) => {
    setActiveKey(key)
  }
  return (
    <Tab type='card' activeKey={activeKey} onChange={handleTabChange}>
      <TabPane tab={<>{profile}</>} key='1' disabled>
        <ProfileComponents onNext={() => handleTabChange("2")} />
      </TabPane>
      <TabPane tab={<>{billingAddress}</>} key='2' id='billingAddress' disabled>
        <BillingAddressComponents onPrevious={() => handleTabChange("1")} onNext={() => handleTabChange("3")} />
      </TabPane>
      <TabPane tab={<>{confirmation}</>} key='3' disabled>
        <ConfirmationComponents onEdit={() => handleTabChange("1")} />
      </TabPane>
    </Tab>
  )
}
