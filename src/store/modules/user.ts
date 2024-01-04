import { create } from "zustand"
import { persist } from "zustand/middleware"
import { IUserState } from "@/types"

interface LoginState {
  userInfo: IUserState | any
  setUserInfo: (info: IUserState) => void
}

export const useUserStore = create<LoginState>()(
  persist(
    (set) => ({
      userInfo: {},
      setUserInfo: (info) => set(() => ({ userInfo: info }))
    }),
    {
      name: "userInfo"
    }
  )
)
