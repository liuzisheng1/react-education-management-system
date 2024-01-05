export interface BasicResponseModel<T = any> {
  code: number
  message: string
  status: string
  result?: T
  access_token?: string
  refresh_token?: string
  expiresIn?: number
}
