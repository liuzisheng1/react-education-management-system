import type { ProSettings } from "@ant-design/pro-components"
import { PageContainer, ProLayout, SettingDrawer } from "@ant-design/pro-components"
import { Avatar, Space } from "antd"
import { useState, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import defaultProps from "./_defaultProps"
import ProSkeleton from "@ant-design/pro-skeleton"

export default function index() {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    layout: "side"
  })

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const [pathname, setPathname] = useState("/home/main")

  // 根据实际情况判断是否展示骨架屏，这里仅作示例用法
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 模拟数据加载完成
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const navigate = useNavigate()
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
        onCollapse={() => {
          setIsCollapsed(!isCollapsed)
        }}
        menu={{
          type: "group"
        }}
        actionsRender={(props) => {
          if (props.isMobile) return []
          return [
            <Space
              key={1}
              style={{
                height: "56px",
                width: "auto"
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
                <Space
                  style={{
                    display: isCollapsed ? "none" : "block",
                    fontSize: "14px",
                    marginInlineEnd: "5px"
                  }}
                >
                  七妮妮
                </Space>
              </Space>
            </Space>
          ]
        }}
        menuRender={(_props, defaultDom) => <>{defaultDom}</>}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || "/welcome")
              navigate(item.path, { replace: true })
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          {/* 如果还在加载状态，显示骨架屏 */}
          {isLoading && <ProSkeleton active />}
          {/* 当内容加载完毕，通过Outlet展示实际路由匹配到的子组件 */}
          {!isLoading && <Outlet />}
        </PageContainer>
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        enableDarkTheme
        getContainer={() => document.getElementById("custom-modules-drawer-container")}
        settings={settings}
        onSettingChange={(changeSetting) => {
          setSetting(changeSetting)
        }}
        disableUrlParams={false}
      />
    </div>
  )
}
