import { SnippetsOutlined } from "@ant-design/icons"
import "./style.less"
import { ProCard } from "@ant-design/pro-components"
const WorkQuick = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)" }}>
      <div style={{ gridColumn: "1 / span 2", gridRow: "1 / span 2" }}>
        <ProCard bordered>
          <div style={{ display: "grid", placeItems: "center" }}>
            <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
          </div>
          <div style={{ textAlign: "center" }}>主控台</div>
        </ProCard>
      </div>
      <div style={{ gridColumn: "3 / span 2" }}>
        <ProCard bordered>
          <div style={{ display: "grid", placeItems: "center" }}>
            <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
          </div>
          <div style={{ textAlign: "center" }}>列表</div>
        </ProCard>
      </div>
      <div style={{ gridColumn: "5 / span 2" }}>
        <ProCard bordered>
          <div style={{ display: "grid", placeItems: "center" }}>
            <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
          </div>
          <div style={{ textAlign: "center" }}>表单</div>
        </ProCard>
      </div>
      <div style={{ gridColumn: "1 / span 2", gridRow: "3 / span 1" }}>
        <ProCard bordered>
          <div style={{ display: "grid", placeItems: "center" }}>
            <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
          </div>
          <div style={{ textAlign: "center" }}>权限管理</div>
        </ProCard>
      </div>
      <div style={{ gridColumn: "3 / span 2", gridRow: "3 / span 1" }}>
        <ProCard bordered>
          <div style={{ display: "grid", placeItems: "center" }}>
            <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
          </div>
          <div style={{ textAlign: "center" }}>系统管理</div>
        </ProCard>
      </div>
      <div style={{ gridColumn: "5 / span 2", gridRow: "3 / span 1" }}>
        <ProCard bordered>
          <div style={{ display: "grid", placeItems: "center" }}>
            <SnippetsOutlined style={{ fontSize: "28px", color: "#08c" }} />
          </div>
          <div style={{ textAlign: "center" }}>消息</div>
        </ProCard>
      </div>
    </div>
  )
}
export default WorkQuick
