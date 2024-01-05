import { http } from "@/utils/http/index.ts"
import { BasicResponseModel } from "@/types"

export const indexRequest = () =>
  http.request<BasicResponseModel>({
    url: "/api/",
    method: "get"
  })

export function getUserInfo() {
  return http.request({
    url: "/api/admin_info",
    method: "get"
  })
}
export function login(data: any) {
  return http.request<BasicResponseModel>(
    {
      url: "/api/login",
      method: "post",
      data
    },
    {
      // 是否忽略重复请求
      isTransformResponse: false
    }
  )
}
