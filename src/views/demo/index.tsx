import React, { useEffect } from "react"
import { useCountStore } from "@/store/createStore"
const DemoIndex: React.FC = () => {
  const { count, increment } = useCountStore()
  console.log(count)
  useEffect(() => {
    console.log(import.meta.env.DEV)
  }, [])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>加</button>
    </div>
  )
}

export default DemoIndex
