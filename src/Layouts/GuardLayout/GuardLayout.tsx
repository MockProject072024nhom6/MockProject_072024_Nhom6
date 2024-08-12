import React from "react"
import { Layout, Menu } from "antd"
import GuardLayoutContent from "./GuardLayoutContent"
import XPressGuards from "../../Assets/x-press-guards.jpg"
import { Bookmark, LayoutDashboard, MessageSquareText, SquareChevronDown } from "lucide-react"

const { Header, Content, Sider } = Layout
const labels = ["Dashboard", "Day-off", "Working Schedule", "Training course"]
const items = [LayoutDashboard, MessageSquareText, SquareChevronDown, Bookmark].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: labels[index]
}))

export default function App(): JSX.Element {
  return (
    <Layout className='h-screen'>
      <Sider breakpoint='lg' collapsedWidth='0' style={{ background: "white" }} collapsible>
        <div className='mt-5'>
          <img src={XPressGuards} alt='Company logo' className='w-4/5 h-1/2' />
        </div>
        <Menu theme='light' mode='inline' defaultSelectedKeys={["1"]} items={items} className='mt-10' />
      </Sider>
      <GuardLayoutContent Layout={Layout} Header={Header} Content={Content} />
    </Layout>
  )
}
