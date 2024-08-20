import { TableProps } from "antd"
import { X } from "lucide-react"

export default function ColumnDayOffComponents(): TableProps<DayOffColumns>["columns"] {
  const columns: TableProps<DayOffColumns>["columns"] = [
    {
      title: "Index",
      dataIndex: "index",
      key: "index"
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate"
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate"
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "reason"
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state"
    },
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: _ => <X className='cursor-pointer' />
    }
  ]
  return columns
}
