import { Layout } from "antd"
import CustomerLayoutContent from "./CustomerLayoutContent"
import { Content } from "antd/es/layout/layout"
import Header from "../../ComponentsCustomer/Header"
import Footer from "../../ComponentsCustomer/Footer"

export default function App(): JSX.Element {
  return (
    <Layout className=''>
      <CustomerLayoutContent Layout={Layout} Header={Header} Content={Content} Footer={Footer} />
    </Layout>
  )
}
