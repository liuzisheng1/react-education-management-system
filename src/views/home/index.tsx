import React from "react"
import { ProForm, ProFormText } from "@ant-design/pro-components"

const Home: React.FC = () => {
  return (
    <>
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
export default Home
