import { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
const Login = lazy(() => import("@/views/login"))
const Home = lazy(() => import("@/views/home"))
const Demo = lazy(() => import("@/views/demo"))
const Main = lazy(() => import("@/views/mainConsole"))
const NotFond404 = lazy(() => import("@/views/notFond/404"))

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
