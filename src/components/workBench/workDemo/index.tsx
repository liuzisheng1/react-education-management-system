import { SnippetsOutlined } from "@ant-design/icons"
import "./style.less"
import { ProCard } from "@ant-design/pro-components"
const WorkDemo = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
      <div style={{ gridColumn: "1 / span 2" }}>
        <ProCard
          title={
            <div className="work-demo-title">
              <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
              <p>Github</p>
            </div>
          }
          bordered
        >
          <div>是一个面向开源及私有软件项目的托管平台。</div>
        </ProCard>
      </div>
      <div style={{ gridColumn: "3 / span 2" }}>
        <ProCard
          title={
            <div className="work-demo-title">
              <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
              <p>Vue</p>
            </div>
          }
          bordered
        >
          <div>是一个面向开源及私有软件项目的托管平台。</div>
        </ProCard>
      </div>
      <div style={{ gridColumn: "5 / span 2" }}>
        <ProCard
          title={
            <div className="work-demo-title">
              <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
              <p>Html5</p>
            </div>
          }
          bordered
        >
          <div>是一个面向开源及私有软件项目的托管平台。</div>
        </ProCard>
      </div>
      <div style={{ gridColumn: "1 / span 2", gridRow: "2 / span 1" }}>
        <ProCard
          title={
            <div className="work-demo-title">
              <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
              <p>Angular</p>
            </div>
          }
          bordered
        >
          <div>是一个面向开源及私有软件项目的托管平台。</div>
        </ProCard>
      </div>
      <div style={{ gridColumn: "3 / span 2", gridRow: "2 / span 1" }}>
        <ProCard
          title={
            <div className="work-demo-title">
              <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
              <p>React</p>
            </div>
          }
          bordered
        >
          <div>是一个面向开源及私有软件项目的托管平台。</div>
        </ProCard>
      </div>
      <div style={{ gridColumn: "5 / span 2", gridRow: "2 / span 1" }}>
        <ProCard
          title={
            <div className="work-demo-title">
              <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
              <p>Js</p>
            </div>
          }
          bordered
        >
          <div>是一个面向开源及私有软件项目的托管平台。</div>
        </ProCard>
      </div>
    </div>
  )
}

export default WorkDemo
