import React from "react"
import { Outlet } from "react-router-dom"

export default function GuardLayoutContent({ Layout, Header, Content }: I_Props_GuardLayoutContent) {
  return (
    <>
      <Layout>
        <Header style={{ padding: 0, background: "white" }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div className='p-6 min-h-[22.5rem] bg-white rounded-lg'>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </>
  )
}
