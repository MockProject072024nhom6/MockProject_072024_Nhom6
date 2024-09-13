import Chat from "@/ComponentsCustomer/Chat"
import { I_Props_CustomerLayoutContent } from "@/Types/CustomerTypes"
import React from "react"
import { Outlet } from "react-router-dom"

export default function CustomerLayoutContent({ Layout, Header, Content, Footer }: I_Props_CustomerLayoutContent) {
  return (
    <>
      <Layout>
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
        <Chat />
      </Layout>
    </>
  )
}
