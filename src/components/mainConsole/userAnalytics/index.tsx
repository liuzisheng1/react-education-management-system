import "./style.less"
import InfiniteScroll from "react-infinite-scroll-component"
import { Avatar, Button, Divider, List, Skeleton } from "antd"
import { useEffect, useState } from "react"
import { Progress } from "antd"
interface DataType {
  gender: string
  name: {
    title: string
    first: string
    last: string
  }
  email: string
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  nat: string
}
const UserAnalytics = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<DataType[]>([])

  const loadMoreData = () => {
    if (loading) {
      return
    }
    setLoading(true)
    fetch("https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo")
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results])
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    loadMoreData()
  }, [])

  return (
    <div
      id="scrollableDiv"
      style={{
        height: 366,
        overflow: "auto",
        padding: "0"
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <div className="progress-bar-box" style={{ width: "40%" }}>
                <Progress percent={30} size="small" />
                <Button
                  style={{
                    backgroundColor: "rgb(206, 227, 252)",
                    color: "rgb(32,128,240)",
                    borderRadius: "40px"
                  }}
                  type="primary"
                >
                  查看
                </Button>
              </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  )
}
export default UserAnalytics
