// import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from "@ant-design/icons"

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/home",
        name: "Dashboard",
        routes: [
          {
            path: "/home/main",
            name: "主控台"
          }
        ]
      },
      {
        path: "/text",
        name: "考试管理"
      }
    ]
  },
  location: {
    pathname: "/"
  }
}
