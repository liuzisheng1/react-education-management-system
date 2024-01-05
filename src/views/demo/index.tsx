import React, { useEffect } from "react"
import { Button } from "antd"
import { useCountStore } from "@/store/createStore"
import { indexRequest } from "@/api"
const DemoIndex: React.FC = () => {
  const { count, increment } = useCountStore()
  console.log(count)
  useEffect(() => {}, [])
  const btn = async () => {
    const res = await indexRequest()
    console.log(res)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>加</button>
      <Button onClick={btn}>测试</Button>
    </div>
  )
}

export default DemoIndex
