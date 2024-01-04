type UserInfoType = {
  name: string
  email: string
}
export interface IUserState {
  access_token: string
  // 刷新令牌
  refresh_token: string
  // 用户名
  username: string
  // 用户ID
  user_id: string
  // 欢迎信息
  welcome: string
  // 头像
  avatar: string
  // 权限
  permissions: any[]
  // 信息
  info: UserInfoType
}
