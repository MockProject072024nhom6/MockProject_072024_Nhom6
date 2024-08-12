import React from "react"
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons"
import { Layout, Menu, theme } from "antd"
import GuardLayoutContent from "./GuardLayoutContent"
import XPressGuards from "../../Assets/x-press-guards.jpg"

const { Header, Content, Sider } = Layout
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`
}))

export default function App(): JSX.Element {
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
    <Layout className='h-screen'>
      <Sider
        breakpoint='lg'
        collapsedWidth='0'
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
        style={{ background: "white" }}
      >
        <div>
          <img src={XPressGuards} alt='Company logo' />
        </div>
        <Menu theme='light' mode='inline' defaultSelectedKeys={["1"]} items={items} />
      </Sider>
      <GuardLayoutContent Layout={Layout} Header={Header} Content={Content} />
    </Layout>
  )
}
