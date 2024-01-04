import React, { useState, useEffect } from "react"
import { Button } from "@/plugins/antd.ts"
import { getUserInfo } from "@/api"
import { useCountStore } from "@/store/createStore"
const DemoIndex: React.FC = () => {
  const { count, increment } = useCountStore()
  const [state, setState] = useState([])
  console.log(count)
  useEffect(() => {}, [])
  const handleGetUserInfo = async () => {
    const res = await getUserInfo()
    res && setState(res)
    console.log(res, state)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>加</button>
      <Button type="primary" onClick={handleGetUserInfo}>
        按钮
      </Button>
    </div>
  )
}

export default DemoIndex
