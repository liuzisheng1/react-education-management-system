import { http } from "@/utils/http/index.ts"
import { BasicResponseModel } from "@/types"

export function getUserInfo() {
  return http.request({
    url: "/admin_info",
    method: "get"
  })
}
export function loginToHome(params: any) {
  return http.request<BasicResponseModel>(
    {
      url: "/login",
      method: "post",
      params
    },
    {
      // 是否忽略重复请求
      isTransformResponse: false
    }
  )
}
