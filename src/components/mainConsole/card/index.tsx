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
import CountUp from "react-countup"
import { Statistic } from "antd"
const formatter = (value: number) => <CountUp end={value} separator="," />
const MainConsoleCard = () => {
  const [enrollNum, setEnrollNum] = useState<number>(1689)
  const [ordersNum, setOrdersNum] = useState<number>(2580)
  const [weekAmountNum, setWeekAmountNum] = useState<number>(3980)
  const [monthAmountNum, setMonthAmountNum] = useState<number>(1689552)
  useEffect(() => {
    setEnrollNum
    setOrdersNum
    setWeekAmountNum
    setMonthAmountNum
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
          <Statistic value={enrollNum} precision={2} formatter={formatter} />
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
          <Statistic value={ordersNum} precision={2} formatter={formatter} />
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
          <span>￥</span>
          <Statistic value={weekAmountNum} precision={2} formatter={formatter} />
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
          <span>￥</span>
          <Statistic value={monthAmountNum} precision={2} formatter={formatter} />
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
