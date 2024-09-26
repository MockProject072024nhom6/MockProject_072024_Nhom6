import React from "react"
import { Layout, Menu } from "antd"
import GuardLayoutContent from "./GuardLayoutContent"
import XPressGuards from "../../Assets/x-press-guards.jpg"
import Image from "../../Components/SharedComponents/Image"
import { NavLink } from "react-router-dom"

export default function GuardLayout({ menu, itemList, guardPaths }: I_Props_GuardLayout): JSX.Element {
  const { Header, Content, Sider } = Layout
  const handleNavMenu = () =>
    itemList?.map((icon, index) => (
      <Menu.Item key={String(index + 1)} icon={React.createElement(icon)}>
        <NavLink to={guardPaths ? guardPaths[index] : ""}>{menu[index]}</NavLink>
      </Menu.Item>
    ))
  return (
    <Layout className='h-screen'>
      <Sider breakpoint='lg' collapsedWidth='0' style={{ background: "white" }} collapsible>
        <div className='mt-5'>
          <Image src={XPressGuards} alt='Company logo' width='200' height='200' />
        </div>
        <Menu theme='light' mode='inline' defaultSelectedKeys={["1"]} className='mt-10'>
          {handleNavMenu()}
        </Menu>
      </Sider>
      <GuardLayoutContent Layout={Layout} Header={Header} Content={Content} />
    </Layout>
  )
}
