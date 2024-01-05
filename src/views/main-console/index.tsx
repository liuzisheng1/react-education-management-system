import "./style.less"
import MainCard from "@/components/main-console/card"
import MainConsoleEcharts from "@/components/main-console/echarts"
import UserAnalytics from "@/components/main-console/user-analytics"
import LatestOrders from "@/components/main-console/latest-orders"
import ConsumptionRanking from "@/components/main-console/consumption-ranking"
import { ProCard } from "@ant-design/pro-components"
const Main = () => {
  return (
    <div className="main-box">
      <div className="main-card-box">
        <MainCard />
      </div>
      <div className="main-echarts-progress">
        <ProCard title="订单来源" bordered style={{ maxWidth: "60%" }}>
          <hr />
          <div className="main-echarts-box">
            <MainConsoleEcharts />
          </div>
        </ProCard>
        <ProCard title="用户分析" bordered style={{ maxWidth: "40%" }}>
          <hr />
          <div className="main-progress-box">
            <UserAnalytics />
          </div>
        </ProCard>
      </div>
      <div className="main-orders-ranking">
        <ProCard title="最新订单" bordered style={{ maxWidth: "65%" }}>
          <hr />
          <div className="main-orders-box">
            <LatestOrders />
          </div>
        </ProCard>
        <ProCard title="消费排行" bordered style={{ maxWidth: "35%" }}>
          <hr />
          <div className="main-ranking-box">
            <ConsumptionRanking />
          </div>
        </ProCard>
      </div>
    </div>
  )
}
export default Main
