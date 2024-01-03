import { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
const Login = lazy(() => import("@/views/login"))
const Home = lazy(() => import("@/views/home"))
const Demo = lazy(() => import("@/views/demo"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />,
    children: [{}]
  },
  {
    path: "/demo",
    element: <Demo />
  },
  {
    path: "/login",
    element: <Login />
  }
]

export default routes
