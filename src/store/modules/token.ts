import { create } from "zustand"

interface TokenState {
  accessToken: string
  refreshToken: string
  expiresIn: number | null
  setAccessToken(token: string): void
  setRefreshToken(token: string): void
  clearTokens(): void
  getExpiresIn(): string | null // 修改了这个getExpiresIn方法，通常它不需要参数用来获取状态
  setExpiresIn(expiresIn: number): void
}

export const useTokenStore = create<TokenState>((set) => ({
  accessToken: "",
  refreshToken: "",
  expiresIn: 0,

  setAccessToken(token: string) {
    set(() => ({ accessToken: token }))
  },

  setRefreshToken(token: string) {
    set(() => ({ refreshToken: token }))
  },

  clearTokens() {
    set(() => ({ accessToken: null, refreshToken: null, expiresIn: null }))
  },

  // 删除了getExpiresIn的参数，因为它应该用于获取当前的expiresIn值
  getExpiresIn() {
    return this.expiresIn
  },

  // 修复了setExpiresIn方法，现在是正确设置expiresIn字段
  setExpiresIn(expiresIn: number) {
    set(() => ({ expiresIn: expiresIn }))
  }
}))
