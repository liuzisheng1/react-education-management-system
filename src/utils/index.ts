import { isObject } from "@/utils/is.ts"

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  // 定义一个变量，用于存储属性名
  let key: string
  // 遍历target对象
  for (key in target) {
    // 如果src[key]是对象，则递归调用deepMerge函数，否则将src[key]设置为target[key]
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  // 返回合并后的对象
  return src
}

export function isUrl(url: string) {
  return /^(http|https):\/\//g.test(url)
}

// 将对象添加当作参数拼接到URL上面
export function setObjToUrlParams(baseUrl: string, obj: object): string {
  let parameters = ""
  let url = ""
  for (const key in obj) {
    parameters += key + "=" + encodeURIComponent(obj[key]) + "&"
  }
  parameters = parameters.replace(/&$/, "")
  if (/\?$/.test(baseUrl)) {
    url = baseUrl + parameters
  } else {
    url = baseUrl.replace(/\/?$/, "?") + parameters
  }
  return url
}
