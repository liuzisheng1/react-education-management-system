import { Column } from "@ant-design/plots"

const data = [
  { month: "1月", visits: 1234 },
  { month: "2月", visits: 9012 },
  { month: "3月", visits: 3456 },
  { month: "4月", visits: 6789 },
  { month: "5月", visits: 5678 },
  { month: "6月", visits: 3589 },
  { month: "7月", visits: 7890 },
  { month: "8月", visits: 8901 },
  { month: "9月", visits: 5556 },
  { month: "10月", visits: 1234 },
  { month: "11月", visits: 2345 },
  { month: "12月", visits: 3456 }
]

const MonitoringDeskEchartsItemOne = () => {
  const config = {
    data,
    xField: "month",
    yField: "visits",
    style: {
      fill: "#2989FF"
    },
    label: {
      style: {
        fill: "#000"
      },
      offset: 10
    },
    legend: false
  }
  return <Column {...config} />
}

export default MonitoringDeskEchartsItemOne
