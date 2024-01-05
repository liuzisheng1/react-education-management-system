import { ProCard } from "@ant-design/pro-components"
import "./style.less"
import WorkHeader from "@/components/work-bench/work-header"
import WorkDemo from "@/components/workBench/work-demo"
import WorkQuick from "@/components/workBench/work-quick"
import WorkDynamic from "@/components/workBench/work-dynamic"
import workimg from "./images/imglogo.png"
import { Button } from "antd"
const WorkBench = () => {
  return (
    <div className="work-bench-box">
      <div className="work-bench-header-box">
        <WorkHeader />
      </div>
      <div
        className="word-bench-content"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          gridAutoFlow: "dense"
        }}
      >
        <div className="work-demo" style={{ gridRowEnd: "span 3" }}>
          <ProCard title="项目" bordered style={{ borderRadius: "12px" }}>
            <hr />
            <div>
              <WorkDemo />
            </div>
          </ProCard>
        </div>
        <div className="work-quick-actions">
          <ProCard title="快捷操作" bordered style={{ borderRadius: "12px" }}>
            <hr />
            <div>
              <WorkQuick />
            </div>
          </ProCard>
        </div>

        <div className="work-imgbox" style={{ gridRowEnd: "span 3" }}>
          <ProCard bordered style={{ borderRadius: "12px" }}>
            <div>
              <img width={"100%"} src={workimg} alt="" />
            </div>
          </ProCard>
        </div>
        <div className="work-dynamic">
          <ProCard
            title="动态"
            bordered
            extra={<Button type="link">更多</Button>}
            style={{ borderRadius: "12px" }}
          >
            <hr />
            <div>
              <WorkDynamic />
            </div>
          </ProCard>
        </div>
      </div>
    </div>
  )
}
export default WorkBench
