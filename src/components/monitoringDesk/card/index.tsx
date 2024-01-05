import { ProCard } from "@ant-design/pro-components"
import "./style.less"
import { useState, useEffect } from "react"
import { ArrowUpOutlined, ArrowDownOutlined, SnippetsOutlined } from "@ant-design/icons"
import CountUp from "react-countup"
import { Statistic } from "antd"
const formatter = (value: number) => <CountUp end={value} separator="," />

const MonitoringDeskCard = () => {
  const [visitsNum, setVisitsNum] = useState<number>(1689)
  const [salesNum, setSalesNum] = useState<number>(2580)
  const [volumeNum, setVolumeNum] = useState<number>(3980)
  const [turnoverNum, setTurnoverNum] = useState<number>(1689552)
  useEffect(() => {
    setVisitsNum
    setSalesNum
    setVolumeNum
    setTurnoverNum
  }, [])
  return (
    <div className="monitoring-console-card-box">
      <ProCard
        title={
          <span>
            <p style={{ textAlign: "center" }}>
              <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
            </p>
            访问量
          </span>
        }
        bordered
        extra="周"
        style={{ maxWidth: "25%" }}
      >
        <div className="monitoring-num">
          <Statistic value={visitsNum} precision={2} formatter={formatter} />
          <div>
            <Statistic
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </div>
        </div>
      </ProCard>
      <ProCard
        title={
          <span>
            <p style={{ textAlign: "center" }}>
              <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
            </p>
            销售额
          </span>
        }
        bordered
        extra="周"
        style={{ maxWidth: "25%" }}
      >
        <div className="monitoring-num">
          <Statistic value={salesNum} precision={2} formatter={formatter} />
          <div>
            <Statistic
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </div>
        </div>
      </ProCard>
      <ProCard
        title={
          <span>
            <p style={{ textAlign: "center" }}>
              <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
            </p>
            订单量
          </span>
        }
        bordered
        extra="周"
        style={{ maxWidth: "25%" }}
      >
        <div className="monitoring-num">
          <Statistic value={volumeNum} precision={2} formatter={formatter} />
          <div>
            <Statistic
              value={11.28}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </div>
        </div>
      </ProCard>
      <ProCard
        title={
          <span>
            <p style={{ textAlign: "center" }}>
              <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
            </p>
            成交额
          </span>
        }
        bordered
        extra="月"
        style={{ maxWidth: "25%" }}
      >
        <div className="monitoring-num">
          <Statistic value={turnoverNum} precision={2} formatter={formatter} />
          <div>
            <Statistic
              style={{ fontSize: "12px" }}
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </div>
        </div>
      </ProCard>
    </div>
  )
}

export default MonitoringDeskCard
