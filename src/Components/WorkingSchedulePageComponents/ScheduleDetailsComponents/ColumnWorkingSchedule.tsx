import { Space, TableProps } from "antd"
import { Eye, Pencil } from "lucide-react"
import React from "react"

export default function ColumnWorkingSchedule() {
  const columns: TableProps<DayOffColumns>["columns"] = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index"
    },
    {
      title: "Mission",
      dataIndex: "mission",
      key: "mission"
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Customer name",
      dataIndex: "customerName",
      key: "customerName"
    },
    {
      title: "Guard",
      dataIndex: "guard",
      key: "guard"
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: _ => (
        <Space>
          <Pencil className='cursor-pointer' size={15} />
          <Eye className='cursor-pointer' size={15} />
        </Space>
      )
    }
  ]
  return columns
}
