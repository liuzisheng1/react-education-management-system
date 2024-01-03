import { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
const Login = lazy(() => import("@/views/login"))
const Home = lazy(() => import("@/views/home"))
const MainConsole = lazy(() => import("@/views/mainConsole"))

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
        path: "/home/mainConsole",
        element: <MainConsole />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]

export default routes
