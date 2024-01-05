import "./style.less"
import Itemone from "@/components/monitoring-desk/echarts/echarts-item/oneitem"
import Itemtwo from "@/components/monitoring-desk/echarts/echarts-item/twoitem"
import Itemthree from "@/components/monitoring-desk/echarts/echarts-item/threeitem"
import Itemfour from "@/components/monitoring-desk/echarts/echarts-item/fouritem"
import { ProCard } from "@ant-design/pro-components"
const MonitoringDeskEcharts = () => {
  return (
    <div
      className="monitoring-desk-echarts-box"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "14px" }}
    >
      <div className="item-one">
        <ProCard title="访问量" bordered style={{ maxWidth: "100%" }}>
          <hr />
          <div className="monitoring-desk-echarts-itemone-box item-box">
            <Itemone />
          </div>
        </ProCard>
      </div>
      <div className="item-two">
        <ProCard title="区域排行" bordered style={{ maxWidth: "100%" }}>
          <hr />
          <div className="monitoring-desk-echarts-itemtwo-box item-box">
            <Itemtwo />
          </div>
        </ProCard>
      </div>
      <div className="item-three">
        <ProCard title="销售额" bordered style={{ maxWidth: "100%" }}>
          <hr />
          <div className="monitoring-desk-echarts-itemthree-box item-box">
            <Itemthree />
          </div>
        </ProCard>
      </div>
      <div className="item-four">
        <ProCard title="访问来源" bordered style={{ maxWidth: "100%" }}>
          <hr />
          <div className="monitoring-desk-echarts-itemfour-box item-box">
            <Itemfour />
          </div>
        </ProCard>
      </div>
    </div>
  )
}

export default MonitoringDeskEcharts
