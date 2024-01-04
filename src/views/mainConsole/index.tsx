import "./style.less"
import MainCard from "@/components/mainConsole/card/mainConsoleCard"
import MainConsoleEcharts from "@/components/mainConsole/echarts/mainConsoleEcharts"
import UserAnalytics from "@/components/mainConsole/userAnalytics"
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
    </div>
  )
}
export default Main
