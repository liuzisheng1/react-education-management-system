export interface UserInfo {
  _id?: string
  userName?: string
  email?: string
  username?: string
  password?: string
  phone?: string
  role?: string
  welcome?: string
  avatar?: string
  userType?: string
  status?: string
  createTime?: string
  updateTime?: string
}
export interface User extends UserInfo {
  expires_in: string
  access_token: string
  refresh_token: string
  permissions: any[]
}
