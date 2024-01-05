import { ProCard } from "@ant-design/pro-components"
import { useState, useEffect } from "react"
import "./style.less"
const WorkHeader = () => {
  const [workUser, setWorkUser] = useState([
    {
      id: 1,
      headerimg:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F9e18d14b-8a44-41b0-97d9-6aed05b70e7f%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707030466&t=307b087752ed3616e62dd5e39ffbf98c",
      text: "早安，Ah jung，开始您一天的工作吧！",
      weather: "今日阴转大雨，15℃ - 25℃，出门记得带伞哦。"
    }
  ])
  useEffect(() => {
    setWorkUser
  }, [])
  return (
    <div className="work-header-box">
      <ProCard title="工作台" bordered style={{ maxWidth: "100%" }}>
        <div className="work">
          <div className="work-user">
            <div className="work-user-headerimg">
              <img
                style={{ width: "66px", borderRadius: "50%" }}
                src={workUser[0].headerimg}
                alt=""
              />
            </div>
            <div className="work-user-text">
              <p>{workUser[0].text}</p>
              <p>{workUser[0].weather}</p>
            </div>
          </div>
          <div className="work-event">
            <div className="work-event-item">
              <p>项目数</p>
              <p>18</p>
            </div>
            <div className="work-event-item">
              <p>代办</p>
              <p>3/5</p>
            </div>
            <div className="work-event-item">
              <p>消息</p>
              <p>66</p>
            </div>
          </div>
        </div>
      </ProCard>
    </div>
  )
}
export default WorkHeader
