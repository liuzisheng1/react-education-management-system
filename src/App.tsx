import { useState } from "react"
import { ProForm, ProFormText } from "@ant-design/pro-components"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <ProForm
        onFinish={async (values) => {
          console.log(values)
        }}
      >
        <ProFormText name="name" label="姓名" />
      </ProForm>
    </>
  )
}

export default App
