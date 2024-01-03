import { lazy } from "react"
import { Navigate, RouteObject } from "react-router-dom"
const Login = lazy(() => import("@/views/login"))
const Home = lazy(() => import("@/views/home"))
const NotFond404 = lazy(() => import("@/views/notFond/404"))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />
  },
  {
    path: "/home",
    element: <Home />
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
