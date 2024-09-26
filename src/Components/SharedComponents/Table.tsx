import React from "react"
import { Table } from "antd"
import { AnyObject, I_Props_Table } from "../../Types/GuardTypes"

export default function Tables({ columns, data }: I_Props_Table): JSX.Element {
  return <Table columns={columns} dataSource={data as readonly AnyObject[] | undefined} />
}
