import { create } from "zustand"

// 创建状态存储
interface CountState {
  count: number
  increment: () => void
  decrement: () => void
}

export const useCountStore = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
}))
