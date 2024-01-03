// storage.ts

type StorageType = "localStorage" | "sessionStorage"

interface StorageService {
  setItem: (key: string, value: any) => void
  getItem: <T>(key: string) => T | null
  removeItem: (key: string) => void
  clear: () => void
}

const getStorage = (type: StorageType): Storage | null => {
  switch (type) {
    case "localStorage":
      return window.localStorage
    case "sessionStorage":
      return window.sessionStorage
    default:
      return null
  }
}

const useStorage = (type: StorageType): StorageService => {
  const storage = getStorage(type)

  const setItem = (key: string, value: any) => {
    if (storage) {
      try {
        // 将值转换为字符串存储
        storage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.error("Error setting item in storage:", error)
      }
    }
  }

  const getItem = <T>(key: string): T | null => {
    if (storage) {
      const storedValue = storage.getItem(key)
      if (storedValue) {
        try {
          // 将获取的字符串解析为对象
          return JSON.parse(storedValue) as T
        } catch (error) {
          console.error("Error parsing stored item:", error)
          return null
        }
      }
      return null
    }
    return null
  }

  const removeItem = (key: string) => {
    if (storage) {
      storage.removeItem(key)
    }
  }
  const clear = () => {
    if (storage) {
      storage.clear()
    }
  }

  return {
    setItem,
    getItem,
    removeItem,
    clear
  }
}

export default useStorage
