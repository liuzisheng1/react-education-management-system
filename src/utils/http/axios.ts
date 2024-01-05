import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from "axios"
import { RequestOptions, CreateAxiosOptions, Result } from "@/types"
import { AxiosCanceler } from "./axiosCancel.ts"
import { isFunction } from "@/utils/is"
import { cloneDeep } from "@/utils/lib/lodashChunk.ts"

export class requestAxios {
  private axiosInstance: AxiosInstance
  private readonly options: CreateAxiosOptions
  constructor(options: CreateAxiosOptions) {
    this.options = options
    this.axiosInstance = axios.create(options)
    this.setupInterceptors()
  }

  private getTransform() {
    const { transform } = this.options
    return transform
  }
  getAxios(): AxiosInstance {
    return this.axiosInstance
  }

  // 创建axios实例
  private createAxios(config: CreateAxiosOptions): void {
    this.axiosInstance = axios.create(config)
  }
  // 重新配置axios
  configAxios(config: CreateAxiosOptions) {
    if (!this.axiosInstance) {
      return
    }
    this.createAxios(config)
  }

  // 设置通用header

  setHeader(headers: any): void {
    if (!this.axiosInstance) {
      return
    }
    Object.assign(this.axiosInstance.defaults.headers, headers)
  }

  // 请求方法
  request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
    let conf: AxiosRequestConfig = cloneDeep(config)
    const transform = this.getTransform()
    const { requestOptions } = this.options
    const opt: RequestOptions = Object.assign({}, requestOptions, options)
    // 请求之前处理配置, 请求失败处理 , 请求成功处理
    const { beforeRequestHook, requestCatch, transformRequestData } = transform || {}
    if (beforeRequestHook && isFunction(beforeRequestHook)) {
      conf = beforeRequestHook(conf, opt)
    }
    //这里重新 赋值成最新的配置
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    conf.requestOptions = opt

    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<Result>>(conf)
        .then((res: AxiosResponse<Result>) => {
          // 请求是否被取消
          const isCancel = axios.isCancel(res)
          if (transformRequestData && isFunction(transformRequestData) && !isCancel) {
            try {
              const ret = transformRequestData(res, opt)
              resolve(ret)
            } catch (err) {
              reject(err || new Error("request error!"))
            }
            return
          }
          resolve(res as unknown as Promise<T>)
        })
        .catch((error: Error) => {
          if (requestCatch && isFunction(requestCatch)) {
            reject(requestCatch(error))
            return
          }
          reject(error)
        })
    })
  }

  // 拦截器配置
  private setupInterceptors() {
    const transform = this.getTransform()
    if (!transform) {
      return
    }
    /*
     * requestInterceptors: 请求之前的拦截器
     * requestInterceptorsCatch: 请求之前的拦截器错误处理
     * responseInterceptors: 请求之后的拦截器
     * responseInterceptorsCatch: 请求之后的拦截器错误处理
     * */
    const {
      requestInterceptors,
      requestInterceptorsCatch,
      responseInterceptors,
      responseInterceptorsCatch
    } = transform

    const axiosCanceler = new AxiosCanceler()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      const {
        headers: { ignoreCancelToken }
      } = config
      const ignoreCancel =
        ignoreCancelToken !== undefined
          ? ignoreCancelToken
          : this.options.requestOptions?.ignoreCancelToken

      !ignoreCancel && axiosCanceler.addPending(config)

      // 请求之前的拦截器
      if (requestInterceptors && isFunction(requestInterceptors)) {
        config = requestInterceptors(config, this.options)
      }
      return config
    }, undefined)

    // 请求拦截器错误捕获
    requestInterceptorsCatch &&
      isFunction(requestInterceptorsCatch) &&
      this.axiosInstance.interceptors.request.use(undefined, requestInterceptorsCatch)
    // 响应结果拦截器处理
    this.axiosInstance.interceptors.response.use((res: AxiosResponse<any>) => {
      res && axiosCanceler.removePending(res.config)
      if (responseInterceptors && isFunction(responseInterceptors)) {
        res = responseInterceptors(res)
      }
      return res
    }, undefined)

    // 响应结果拦截器错误捕获
    responseInterceptorsCatch &&
      isFunction(responseInterceptorsCatch) &&
      this.axiosInstance.interceptors.response.use(undefined, responseInterceptorsCatch)
  }
}
