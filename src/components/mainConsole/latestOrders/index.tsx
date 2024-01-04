import "./style.less"
import { Table, Tag } from "antd"
import type { ColumnsType } from "antd/es/table"

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const columns: ColumnsType<DataType> = [
  {
    title: "序号",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>
  },
  {
    title: "下单用户",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "商品名称",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "商品库存",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "订单金额",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "商品图片",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "付款状态",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "客户标签",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green"
          if (tag === "loser") {
            color = "volcano"
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    )
  },
  {
    title: "购买日期",
    dataIndex: "address",
    key: "action"
  }
]

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
]
const LatestOrders = () => {
  return <Table columns={columns} dataSource={data} />
}
export default LatestOrders
