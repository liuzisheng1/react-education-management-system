import { create } from "zustand"
import { persist } from "zustand/middleware"
import { User } from "@/types"

interface LoginState {
  userInfo: User | any
  setUserInfo: (info: User) => void
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
