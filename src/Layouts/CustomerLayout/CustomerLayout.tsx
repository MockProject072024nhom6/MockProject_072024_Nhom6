import { Layout } from "antd"
import CustomerLayoutContent from "./CustomerLayoutContent"
import { Content, Footer, Header } from "antd/es/layout/layout"

export default function App(): JSX.Element {
  return (
    <Layout className='h-screen'>
      <CustomerLayoutContent Layout={Layout} Header={Header} Content={Content} Footer={Footer} />
    </Layout>
  )
}
