import { create } from "zustand"
import { UserInfo } from "@/types"
import useStorage from "@/utils/storage.ts"
const storage = useStorage("localStorage")
import { login } from "@/api"
const { setItem, getItem } = storage

interface TokenState {
  accessToken: string | null
  user: UserInfo
  autoLogin: boolean
  setToken: (token: string | null, rememberMe: boolean) => void
  setUser: (user: UserInfo) => void
  initAutoLogin: () => void
  login: (
    username?: string | null,
    password?: string | null,
    phone?: number | null,
    rememberMe?: boolean
  ) => Promise<void>
}

export const useTokenStore = create<TokenState>((set) => ({
  accessToken: null,
  user: {},
  autoLogin: false,
  setToken: (token, rememberMe) => {
    if (rememberMe) {
      // 这里假设你有一个方法来持久化存储token，比如localStorage或cookies
      setItem("access_token", JSON.stringify(token))
    }
    set({ accessToken: token })
  },
  setUser: (user) => set({ user }),
  login: async (username, password, phone, rememberMe) => {
    const response = await login({ username, password, phone }) // 假设authenticate是一个异步登录函数
    if (response && response.code === 200) {
      set({ accessToken: response?.access_token, user: response?.result?.user })
      if (rememberMe) {
        setItem("access_token", JSON.stringify(response?.access_token))
      }
    }
  },
  initAutoLogin: () => {
    const { authToken } = JSON.parse(getItem("access_token") || "{}") || {}
    if (authToken) {
      set({ accessToken: JSON.stringify(authToken), autoLogin: true })
    }
  }
}))
