import { GithubFilled, InfoCircleFilled, QuestionCircleFilled } from "@ant-design/icons"
import type { ProSettings } from "@ant-design/pro-components"
import { PageContainer, ProCard, ProLayout, SettingDrawer } from "@ant-design/pro-components"
import { Avatar, Space, Button } from "antd"
import { useState } from "react"
import defaultProps from "./_defaultProps"

export default function index() {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: "side"
  })

  const [pathname, setPathname] = useState("/list/sub-page/sub-sub-page1")

  return (
    <div
      id="test-pro-layout"
      style={{
        height: "100vh"
      }}
    >
      <ProLayout
        title="教育后台管理系统"
        logo="https://tse3-mm.cn.bing.net/th/id/OIP-C.4_Cqd5gIv7LealumFw7vVQAAAA?w=150&h=150&c=7&r=0&o=5&pid=1.7"
        {...defaultProps}
        location={{
          pathname
        }}
        menu={{
          type: "group"
        }}
        actionsRender={(props) => {
          if (props.isMobile) return []
          return [
            <div
              key={1}
              style={{
                height: "56px"
              }}
            >
              <Space
                align="center"
                size="middle"
                style={{
                  width: "100%"
                }}
              >
                <Avatar
                  src="https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg"
                  size="large"
                />
                <div
                  style={{
                    fontSize: "14px",
                    marginInlineEnd: "32px"
                  }}
                >
                  七妮妮
                </div>
                <InfoCircleFilled key="InfoCircleFilled" />
                <QuestionCircleFilled key="QuestionCircleFilled" />
                <GithubFilled key="GithubFilled" />
              </Space>
            </div>
          ]
        }}
        menuRender={(props, defaultDom) => (
          <>
            {console.log("defaultDom", defaultDom)}
            {defaultDom}
          </>
        )}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || "/welcome")
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: "100vh",
              minHeight: 800
            }}
          >
            <h1>123</h1>
            <Button type="primary">123</Button>
          </ProCard>
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById("custom-setting-drawer-container")}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting)
        }}
        disableUrlParams={false}
      />
    </div>
  )
}
