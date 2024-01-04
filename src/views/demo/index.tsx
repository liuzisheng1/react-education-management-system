import { useCountStore } from "@/store/createStore"
export default function index() {
  const { count, increment } = useCountStore()
  console.log(count)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>加</button>
    </div>
  )
}
