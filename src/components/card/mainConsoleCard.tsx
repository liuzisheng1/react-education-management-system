import { ProCard } from "@ant-design/pro-components"
import "./style.less"
import { Button } from "antd"
import { useState, useEffect } from "react"
import {
  ArrowUpOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  ArrowDownOutlined
} from "@ant-design/icons"
const MainConsoleCard = () => {
  const [enrollNum, setEnrollNum] = useState<number>(0)
  const [ordersNum, setOrdersNum] = useState<number>(0)
  const [weekAmountNum, setWeekAmountNum] = useState<number>(0)
  const [monthAmountNum, setMonthAmountNum] = useState<number>(0)
  useEffect(() => {
    const duration = 1000 // 动画持续时间
    const targetCounts = [1689, 2580, 3980, 1689552] // 目标数字数组

    const incrementValues = targetCounts.map((targetCount) => {
      return Math.ceil(targetCount / (duration / 16)) // 计算每帧需要增加的值
    })

    const intervalId = setInterval(() => {
      setEnrollNum((prevCount) => {
        if (prevCount < targetCounts[0]) {
          let newCount = prevCount + incrementValues[0]
          if (newCount > targetCounts[0]) {
            newCount = targetCounts[0]
          }
          return newCount
        }
        return prevCount
      })
      setOrdersNum((prevCount) => {
        if (prevCount < targetCounts[1]) {
          let newCount = prevCount + incrementValues[1]
          if (newCount > targetCounts[1]) {
            newCount = targetCounts[1]
          }
          return newCount
        }
        return prevCount
      })
      setWeekAmountNum((prevCount) => {
        if (prevCount < targetCounts[1]) {
          let newCount = prevCount + incrementValues[1]
          if (newCount > targetCounts[1]) {
            newCount = targetCounts[1]
          }
          return newCount
        }
        return prevCount
      })
      setMonthAmountNum((prevCount) => {
        if (prevCount < targetCounts[3]) {
          let newCount = prevCount + incrementValues[3]
          if (newCount > targetCounts[3]) {
            newCount = targetCounts[3]
          }
          return newCount
        }
        return prevCount
      })
    }, 16)

    return () => clearInterval(intervalId) // 清除计时器
  }, [])
  return (
    <div className="main-console-card-box">
      <ProCard
        title="本月注册人数"
        bordered
        extra={<Button type="text">详情</Button>}
        tooltip="本月注册人数"
        style={{ maxWidth: "25%" }}
      >
        <div className="main-num">
          <span>
            <ArrowUpOutlined />
          </span>
          {enrollNum}
        </div>
        <div className="percentage-num">
          <span>
            <CaretUpOutlined />
          </span>
          51% 已超过上周
        </div>
      </ProCard>
      <ProCard
        title="本月订单总数"
        bordered
        extra={<Button type="text">详情</Button>}
        tooltip="本月订单总数"
        style={{ maxWidth: "25%" }}
      >
        <div className="main-num">
          <span>
            <ArrowUpOutlined />
          </span>
          {ordersNum}
        </div>
        <div className="percentage-num">
          <span>
            <CaretDownOutlined />
          </span>
          51% 已超过上周
        </div>
      </ProCard>
      <ProCard
        title="本周支付金额"
        bordered
        extra={<Button type="text">详情</Button>}
        tooltip="本周支付金额"
        style={{ maxWidth: "25%" }}
      >
        <div className="main-num">
          <span>
            <ArrowDownOutlined />
          </span>
          {weekAmountNum.toLocaleString()}
        </div>
        <div className="percentage-num">
          <span>
            <CaretDownOutlined />
          </span>
          51% 已超过上周
        </div>
      </ProCard>
      <ProCard
        title="本月销售总额"
        bordered
        extra={<Button type="text">详情</Button>}
        tooltip="本月销售总额"
        style={{ maxWidth: "25%" }}
      >
        <div className="main-num">
          <span>
            <ArrowDownOutlined />
          </span>
          {monthAmountNum.toLocaleString()}
        </div>
        <div className="percentage-num">
          <span>
            <CaretDownOutlined />
          </span>
          51% 已超过上周
        </div>
      </ProCard>
    </div>
  )
}
export default MainConsoleCard
