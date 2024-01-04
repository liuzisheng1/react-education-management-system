export interface BasicResponseModel<T = any> {
  code: number
  message: string
  result: T
}
