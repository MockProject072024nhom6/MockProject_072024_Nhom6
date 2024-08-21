import React from "react"
import { Outlet } from "react-router-dom"

export default function CustomerLayoutContent({ Layout, Header, Content, Footer }: I_Props_CustomerLayoutContent) {
  return (
    <>
      <Layout>
        <Header />
        <Content>
          <div className='my-10 flex flex-col items-center'>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </>
  )
}
