import "./style.less"
import Monitoring from "@/components/monitoringDesk/card"
import MonitoringEcharts from "@/components/monitoringDesk/echarts"
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
