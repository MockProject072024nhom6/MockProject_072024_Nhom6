import React from "react"
import { Outlet } from "react-router-dom"

export default function CustomerLayoutContent({
  Layout,
  HeaderAbove,
  Header,
  Content,
  Footer
}: I_Props_CustomerLayoutContent) {
  return (
    <>
      <Layout>
        <HeaderAbove />
        <Header />
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </>
  )
}
