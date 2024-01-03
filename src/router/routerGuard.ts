import { useEffect } from "react"
import { useLocation, useRoutes, Location, useNavigate, NavigateFunction } from "react-router-dom"
import { RouteObject } from "@/router/type.ts"

export const searchRouteDetail = (path: string, routes: RouteObject[]): RouteObject | null => {
  for (const item of routes) {
    if (item.path === path) {
      return item
    }
    if (item.children) {
      const routeDetail = searchRouteDetail(path, item.children)
      if (routeDetail) {
        return routeDetail
      }
    }
  }
  // 如果没有找到匹配的路由，则返回null
  return null
}

export const guard = (
  location: Location,
  navigate: NavigateFunction,
  routes: RouteObject[]
): boolean => {
  const { pathname } = location
  const routeDetail = searchRouteDetail(pathname, routes)
  !routeDetail && navigate("/404")
  return true
}

export const RouterGuard = (routes: RouteObject[]) => {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    guard(location, navigate, routes)
  }, [location, navigate, routes])
  document.documentElement.scrollTo(0, 0)
  return useRoutes(routes as any)
}
