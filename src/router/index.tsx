import { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
const Login = lazy(() => import("@/views/login"))
const Home = lazy(() => import("@/views/home"))
const Demo = lazy(() => import("@/views/demo"))
const NotFond404 = lazy(() => import("@/views/notFond/404"))
const Main = lazy(() => import("@/views/mainConsole"))
const MonitoringDesk = lazy(() => import("@/views/monitoringDesk"))
const WorkBench = lazy(() => import("@/views/workBench"))
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/home/main" /> // 默认跳转
      },
      {
        path: "/home/main",
        element: <Main />
      },
      {
        path: "/home/monitoringDesk",
        element: <MonitoringDesk />
      },
      {
        path: "/home/workBench",
        element: <WorkBench />
      }
    ]
  },
  {
    path: "/demo",
    element: <Demo />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/404",
    element: <NotFond404 />
  }
]

export default routes
