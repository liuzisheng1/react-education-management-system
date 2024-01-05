import { Bar } from "@ant-design/plots"

const data = [
  { province: "北京", value: 100 },
  { province: "上海", value: 200 },
  { province: "陕西", value: 300 },
  { province: "山东", value: 222 },
  { province: "广西", value: 333 },
  { province: "南京", value: 444 },
  { province: "深圳", value: 222 },
  { province: "吉林", value: 321 },
  { province: "辽宁", value: 123 },
  { province: "河南", value: 544 }
]

const MonitoringDeskEchartsItemTwo = () => {
  const config = {
    data,
    xField: "province",
    yField: "value",
    colorField: "province",
    sort: {
      reverse: true
    },
    label: {
      text: (originData) => originData.value.toString(),
      style: {
        textAnchor: (d) => (+d.frequency > 0.008 ? "right" : "start"),
        fill: (d) => (+d.frequency > 0.008 ? "#fff" : "#000"),
        dx: (d) => (+d.frequency > 0.008 ? -5 : 5)
      }
    },
    axis: {
      y: {
        labelFormatter: ".0%"
      }
    }
  }
  return <Bar {...config} />
}

export default MonitoringDeskEchartsItemTwo
