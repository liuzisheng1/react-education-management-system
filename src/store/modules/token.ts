import { create } from "zustand"

interface TokenState {
  accessToken: string | null
  refreshToken: string | null
  expiresIn: string | null
  setAccessToken(token: string): void
  setRefreshToken(token: string): void
  clearTokens(): void
  setExpiresIn(expiresIn: string): void
  getExpiresIn(expiresIn: string): void
}

export const useTokenStore = create<TokenState>((set) => ({
  accessToken: null,
  refreshToken: null,
  expiresIn: null,

  setAccessToken(token: string) {
    set((state) => ({ ...state, accessToken: token }))
  },

  setRefreshToken(token: string) {
    set((state) => ({ ...state, refreshToken: token }))
  },

  clearTokens() {
    set((state) => ({ ...state, accessToken: null, refreshToken: null }))
  },

  getExpiresIn(expiresIn: string) {
    set((state) => ({ ...state, expiresIn: expiresIn }))
  },

  setExpiresIn(expiresIn: string) {
    set((state) => ({ ...state, refreshToken: expiresIn }))
  }
}))
