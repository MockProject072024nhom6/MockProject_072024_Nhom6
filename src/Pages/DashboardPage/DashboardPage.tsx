import React from "react"
import Tab from "../../Components/SharedComponents/Tabs"
import { guardStyle } from "../../Styles/GuardStyle"

export default function DashboardPage() {
  return (
    <section>
      <div className={guardStyle.container}>
        <Tab profile={"Profile"} billingAddress={"Billing address"} confirmation={"Confirmation"} />
      </div>
    </section>
  )
}