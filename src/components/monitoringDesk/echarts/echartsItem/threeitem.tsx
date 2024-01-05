import { Area } from "@ant-design/plots"

interface DataItem {
  month: string
  sales: number
}

const data: DataItem[] = [
  { month: "一月", sales: 222 },
  { month: "二月", sales: 333 },
  { month: "三月", sales: 111 },
  { month: "四月", sales: 123 },
  { month: "五月", sales: 345 },
  { month: "六月", sales: 432 },
  { month: "七月", sales: 555 },
  { month: "八月", sales: 777 },
  { month: "九月", sales: 234 },
  { month: "十月", sales: 432 },
  { month: "十一月", sales: 111 },
  { month: "十二月", sales: 345 }
]

const MonitoringDeskEchartsItemThree: React.FC = () => {
  const config = {
    data,
    xField: "month",
    yField: "sales"
  }

  return <Area {...config} />
}

export default MonitoringDeskEchartsItemThree
