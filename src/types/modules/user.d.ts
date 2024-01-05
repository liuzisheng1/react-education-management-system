type UserInfoType = {
  _id: string
  name: string
  email: string
  username: string
  password: string
  phone: string
  role: string
  welcome: string
  avatar: string
}
export interface IUserState {
  expires_in: string
  access_token: string
  refresh_token: string
  permissions: any[]
  // 信息
  info: UserInfoType
}
