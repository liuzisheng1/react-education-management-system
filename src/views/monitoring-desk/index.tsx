import "./style.less"
import Monitoring from "@/components/monitoring-desk/card"
import MonitoringEcharts from "@/components/monitoring-desk/echarts"
const MonitoringDesk = () => {
  return (
    <div className="monitoring-box">
      <div className="monitoring-card-box">
        <Monitoring />
      </div>
      <div className="monitoring-echarts-box">
        <MonitoringEcharts />
      </div>
    </div>
  )
}

export default MonitoringDesk
