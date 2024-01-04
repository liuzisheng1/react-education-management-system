import { http } from "@/utils/http"
import { BasicResponseModel } from "@/types"

export function getUserInfo() {
  return http.request({
    url: "/admin_info",
    method: "get"
  })
}
export function login(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: "/login",
      method: "POST",
      params
    },
    {
      // 是否忽略重复请求
      isTransformResponse: false
    }
  )
}
