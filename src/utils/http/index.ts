import axios, { AxiosResponse } from "axios"
import { requestAxios } from "./axios.ts"
import { AxiosTransform, RequestOptions, Result, CreateAxiosOptions } from "@/types"
import { message, Modal } from "@/plugins/antd.ts"
import { deepMerge, isUrl, setObjToUrlParams } from "@/utils/index.ts"
import useStorage from "@/utils/storage"
import { checkStatus } from "./status"
import { isString } from "@/utils/is"
import { useGlobSetting } from "@/hooks"
import { joinTimestamp, formatRequestDate } from "./helper"
import { RequestEnum, ResultEnum, ContentTypeEnum, PageEnum } from "@/enums"
import DualTokenManager from "./token.ts"

const { success, error } = message
const storage = useStorage("sessionStorage")

const globSetting = useGlobSetting()
const urlPrefix = globSetting.urlPrefix || ""
const tokenManager = new DualTokenManager(globSetting.apiUrl)

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
const transform: AxiosTransform = {
  // 处理请求数据
  transformRequestData: (res: AxiosResponse<Result>, options: RequestOptions) => {
    const {
      isShowMessage = true,
      isShowErrorMessage,
      isShowSuccessMessage,
      successMessageText,
      errorMessageText,
      isTransformResponse,
      isReturnNativeResponse
    } = options
    // 是否返回原生响应头 比如：需要获取响应头时使用该属性
    if (isReturnNativeResponse) {
      return res
    }
    // 不进行任何处理，直接返回
    // 用于页面代码可能需要直接获取code，data，message这些信息时开启
    if (!isTransformResponse) {
      return res.data
    }
    const { data } = res
    if (!data) {
      throw new Error("请求出错，请稍候重试")
    }
    //  这里 code，result，message为 后台统一的字段，需要修改为项目自己的接口返回格式
    const { code, result, message } = data
    // 请求成功
    const hasSuccess = data && Reflect.has(data, "code") && code === ResultEnum.SUCCESS
    if (isShowMessage) {
      if (hasSuccess && (successMessageText || isShowSuccessMessage)) {
        // 是否显示自定义信息提示
        success({
          type: "success",
          content: successMessageText || message || "操作成功！"
        }).then(() => {})
      } else if (!hasSuccess && (errorMessageText || isShowErrorMessage)) {
        error(message || errorMessageText || "操作失败！").then(() => {})
      } else if (!hasSuccess && options.errorMessageMode === "modal") {
        Modal.info({
          title: "操作成功",
          content: "您的操作已成功完成！",
          okText: "确认",
          onOk: () => {}
        })
      }
    }
    if (code === ResultEnum.SUCCESS) {
      return result
    }

    let errorMsg = message
    switch (code) {
      // 请求失败
      case ResultEnum.ERROR:
        error(errorMsg).then(() => {})
        break
      // 登录超时
      case ResultEnum.TIMEOUT:
        // 到登录页
        errorMsg = "登录超时，请重新登录!"
        Modal.warning({
          title: "提示",
          content: "登录身份已失效，请重新登录!",
          okText: "确定",
          //negativeText: '取消',
          closable: false,
          maskClosable: false,
          onOk: () => {
            storage.clear()
            window.location.href = PageEnum.BASE_LOGIN
          }
        })
        break
    }
    throw new Error(errorMsg)
  },
  // 请求之前处理config
  beforeRequestHook: (config, options) => {
    const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true, urlPrefix } = options
    const isUrlStr = isUrl(config.url as string)
    if (!isUrlStr && joinPrefix) {
      config.url = `${urlPrefix}${config.url}`
    }

    if (!isUrlStr && apiUrl && isString(apiUrl)) {
      config.url = `${apiUrl}${config.url}`
    }
    const params = config.params || {}
    const data = config.data || false
    if (config.method?.toUpperCase() === RequestEnum.GET) {
      if (!isString(params)) {
        // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
        config.params = Object.assign(params || {}, joinTimestamp(joinTime, false))
      } else {
        // 兼容restful风格
        config.url = config.url + params + `${joinTimestamp(joinTime, true)}`
        config.params = undefined
      }
    } else {
      if (!isString(params)) {
        formatDate && formatRequestDate(params)
        if (Reflect.has(config, "data") && config.data && Object.keys(config.data).length > 0) {
          config.data = data
          config.params = params
        } else {
          config.data = params
          config.params = undefined
        }
        if (joinParamsToUrl) {
          config.url = setObjToUrlParams(
            config.url as string,
            Object.assign({}, config.params, config.data)
          )
        }
      } else {
        // 兼容restful风格
        config.url = config.url + params
        config.params = undefined
      }
    }
    return config
  },
  // 请求拦截器处理
  requestInterceptors: (config, options) => {
    // 请求之前处理config
    const token = tokenManager.getAccessToken()
    // 如果token存在 则统一设置token
    if (token && (config as Recordable)?.requestOptions?.withToken !== false) {
      // jwt token
      ;(config as Recordable).headers.Authorization = options.authenticationScheme
        ? `${options.authenticationScheme} ${token}`
        : token
    }

    return config
  },
  // 响应错误处理
  responseInterceptorsCatch: (error: any) => {
    const { response, code, message } = error || {}
    // TODO 此处要根据后端接口返回格式修改
    const msg: string =
      response && response.data && response.data.message ? response.data.message : ""
    const err: string = error.toString()
    try {
      if (code === "ECONNABORTED" && message.indexOf("timeout") !== -1) {
        error("接口请求超时，请刷新页面重试!")
        return
      }
      if (err && err.includes("Network Error")) {
        Modal.info({
          title: "网络异常",
          content: "请检查您的网络连接是否正常",
          okText: "确定",
          //negativeText: '取消',
          closable: false,
          maskClosable: false
        })
        return Promise.reject(error)
      }
    } catch (error) {
      throw new Error(error as any)
    }
    // 请求是否被取消
    const isCancel = axios.isCancel(error)
    if (!isCancel) {
      checkStatus(error.response && error.response.status, msg).then(() => {
        // 登录超时或者被踢，重新登录
      })
    } else {
      console.warn(error, "请求被取消！")
    }
    //return Promise.reject(error);
    return Promise.reject(response?.data)
  }
}

function createAxios(opt?: Partial<CreateAxiosOptions>) {
  return new requestAxios(
    deepMerge(
      {
        timeout: 10 * 1000,
        authenticationScheme: "",
        prefixUrl: urlPrefix,
        headers: { "Content-Type": ContentTypeEnum.JSON },
        // 数据处理方式
        transform,
        withCredentials: false,
        // 配置项，下面的选项都可以在独立的接口请求中覆盖
        requestOptions: {
          // 默认将prefix 添加到url
          joinPrefix: false,
          // 是否返回原生响应头 比如：需要获取响应头时使用该属性
          isReturnNativeResponse: false,
          // 需要对返回数据进行处理
          isTransformResponse: true,
          // post请求的时候添加参数到url
          joinParamsToUrl: false,
          // 格式化提交参数时间
          formatDate: true,
          // 消息提示类型
          errorMessageMode: "none",
          // 接口地址
          apiUrl: globSetting.apiUrl,
          // 接口拼接地址
          urlPrefix: urlPrefix,
          //  是否加入时间戳
          joinTime: true,
          // 忽略重复请求
          ignoreCancelToken: true,
          // 是否携带token
          withToken: true
        }
      },
      opt || {}
    )
  )
}
export const http = createAxios()
