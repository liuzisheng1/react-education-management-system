import { useState, useEffect } from "react"
import { useLocation, useRoutes, Location, useNavigate, NavigateFunction } from "react-router-dom"
import useStorage from "@/utils/storage.ts"
import { RouteObject } from "@/types"

// 封装权限验证逻辑
const useAuthCheck = (tokenKey: string) => {
  const storage = useStorage("localStorage")
  const isTokenValid = storage.getItem(tokenKey)
  const [authChecked, setAuthChecked] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    !authChecked && (!isTokenValid ? navigate("/login") : setAuthChecked(true))
  }, [navigate, authChecked, isTokenValid])
  return authChecked
}

// 支持尾递归优化的 searchRouteDetail 函数
export const searchRouteDetail = (
  path: string,
  routes: RouteObject[],
  acc?: RouteObject | null
): RouteObject | null => {
  for (const item of routes) {
    if (item.path === path) {
      return item
    }
    if (item.children) {
      const routeDetail = searchRouteDetail(path, item.children, acc)
      if (routeDetail) {
        return routeDetail
      }
    }
  }
  // 如果没有找到匹配的路由，并且acc不存在，则返回null；否则返回acc
  return acc ?? null
}

export const guard = (location: Location, navigate: NavigateFunction, routes: RouteObject[]) => {
  const { pathname } = location
  const routeDetail = searchRouteDetail(pathname, routes)
  if (!routeDetail) {
    navigate("/404")
  }
}

export const RouterGuard = (routes: RouteObject[]) => {
  const location = useLocation()
  const navigate = useNavigate()
  const authChecked = useAuthCheck("access_token")

  useEffect(() => {
    authChecked && guard(location, navigate, routes)
    document.documentElement.scrollTo(0, 0)
  }, [location, authChecked, navigate, routes])

  return useRoutes(routes as any)
}
