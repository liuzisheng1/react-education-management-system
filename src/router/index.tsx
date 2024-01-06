import { lazy } from "react"
import type { RouteObject } from "react-router-dom"
import { Navigate } from "react-router-dom"
const Login = lazy(() => import("@/views/login"))
const Home = lazy(() => import("@/views/home"))
const Demo = lazy(() => import("@/views/demo"))
const Main = lazy(() => import("@/views/main-console"))
const MonitoringDesk = lazy(() => import("@/views/monitoring-desk"))
const WorkBench = lazy(() => import("@/views/work-bench"))
const NotFond404 = lazy(() => import("@/views/not-fond/404"))
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
        element: <Navigate to="/home/main" />
      },
      {
        path: "/home/main",
        element: <Main />
      },
      {
        path: "/home/monitoring-desk",
        element: <MonitoringDesk />
      },
      {
        path: "/home/work-bench",
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
