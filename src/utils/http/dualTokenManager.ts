import axios from "axios"
import dayjs from "dayjs"
import { useTokenStore } from "@/store"

class DualTokenManager {
  isRefreshing = false
  private refreshPromise: Promise<string> | null = null

  constructor(private apiUrl: string) {}

  public async getAccessToken(): Promise<string | null> {
    const { expiresIn, accessToken } = useTokenStore()
    console.log(expiresIn)
    if (this.isAccessTokenExpired(expiresIn)) {
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
    const { refreshToken, setAccessToken, setExpiresIn, setRefreshToken, clearTokens } =
      useTokenStore()
    try {
      const response = await axios.post(`${this.apiUrl}/refresh-token`, {
        refresh_token: refreshToken
      })

      if (response.data && response.data.access_token) {
        setAccessToken(response.data.access_token)
        setExpiresIn(response.data.expires_in)
        // 更新refresh_token（如果后端返回了新的refresh_token）
        if (response.data.refresh_token) {
          setRefreshToken(response.data.refresh_token)
        }
        return response.data.access_token
      }
    } catch (error) {
      console.error("Token刷新失败，请重新登录!")
      clearTokens()
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
