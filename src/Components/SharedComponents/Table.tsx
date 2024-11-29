import React from "react"
import { Table } from "antd"

export default function Tables({ columns, data }: I_Props_Table): JSX.Element {
  return <Table columns={columns} dataSource={data as readonly AnyObject[] | undefined} />
}
