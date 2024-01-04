type UserInfoType = {
  name: string
  email: string
  user_id: string
  username: string
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
