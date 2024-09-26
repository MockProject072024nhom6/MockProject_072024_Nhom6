import { Layout } from "antd"
import CustomerLayoutContent from "./CustomerLayoutContent"
import { Content } from "antd/es/layout/layout"
import Header from "../../ComponentsCustomer/Header"
import Footer from "../../ComponentsCustomer/Footer"
import HeaderAbove from "@/ComponentsCustomer/HeaderAbove"

export default function App(): JSX.Element {
  return (
    <Layout className='h-screen'>
      <CustomerLayoutContent
        Layout={Layout}
        HeaderAbove={HeaderAbove}
        Header={Header}
        Content={Content}
        Footer={Footer}
      />
    </Layout>
  )
}
