import axios from "axios"
import dayjs from "dayjs"
import useStorage from "@/utils/storage.ts"
const storage = useStorage("localStorage")
const { setItem, getItem, clear } = storage
const accessToken = JSON.parse(getItem("access_token"))
const refreshToken = JSON.parse(getItem("refresh_token"))
const expiresIn = JSON.parse(getItem("expiresIn"))
class DualTokenManager {
  isRefreshing = false
  private refreshPromise: Promise<string> | null = null

  constructor(private apiUrl: string) {}

  public async getAccessToken(): Promise<string | null> {
    if (this.isAccessTokenExpired(String(expiresIn))) {
      // 如果access_token过期并且没有正在刷新，则尝试刷新
      if (!this.isRefreshing) {
        this.isRefreshing = true
        try {
          return await this.refreshTokens()
        } finally {
          this.isRefreshing = false
        }
      }

      // 当有正在进行的刷新操作时，等待刷新完成
      if (this.refreshPromise) {
        return this.refreshPromise
      }
    }

    return accessToken
  }

  private async refreshTokens(): Promise<string> {
    try {
      const response = await axios.post(`${this.apiUrl}/refresh-token`, {
        refresh_token: refreshToken
      })

      if (response.data && response.data.access_token) {
        const { access_token, expiresIn } = response.data
        setItem("access_token", JSON.stringify({ access_token }))
        setItem("expiresIn", JSON.stringify({ expiresIn }))
        // 更新refresh_token（如果后端返回了新的refresh_token）
        if (response.data.refresh_token) {
          setItem("refresh_token", JSON.stringify({ refresh_token: response.data.refresh_token }))
        }
        return response.data.access_token
      }
    } catch (error) {
      console.error("Token刷新失败，请重新登录!")
      clear()
      throw error
    }
    return ""
  }

  private isAccessTokenExpired(accessToken: string | null): boolean {
    // 根据实际情况判断access_token是否过期
    // 这里假设你有一个方法可以获取access_token的有效期时间戳
    const expirationTimestamp = this.getExpirationTimestampFromToken(accessToken)
    return !!expirationTimestamp && dayjs().valueOf() > expirationTimestamp
  }

  // 获取access_token的过期时间戳，这里仅作示例，实际逻辑请根据你的应用情况进行修改
  private getExpirationTimestampFromToken(accessToken: string | null): number | null {
    const now = dayjs()
    const expirationDate = now.add(Number(accessToken), "second")
    return expirationDate.valueOf() || null
  }
}

export default DualTokenManager
