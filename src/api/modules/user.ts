/*
 * @Author: liuzisheng1 lzs13333464863@163.com
 * @Date: 2024-01-04 17:23:21
 * @LastEditors: liuzisheng1 lzs13333464863@163.com
 * @LastEditTime: 2024-01-04 17:23:36
 * @FilePath: /react-management-system/src/api/modules/user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { http } from "@/utils/http/index"
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
