import axios from "axios"
import dayjs from "dayjs"
import useStorage from "@/utils/storage.ts"
import { PageEnum } from "@/enums"
const storage = useStorage("localStorage")
const { setItem, getItem, clear } = storage
const isStorage = Object.keys(localStorage).length === 0
const { accessToken } = !isStorage && JSON.parse(getItem("access_token"))
const { refreshToken } = !isStorage && JSON.parse(getItem("refresh_token"))
const { expiresIn } = !isStorage && JSON.parse(getItem("expiresIn"))
// const navigate = useNavigate()
class DualTokenManager {
  isRefreshing = false
  private refreshPromise: Promise<string> | null = null

  constructor(private apiUrl: string) {}

  public async getAccessToken(): Promise<string | null> {
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
    try {
      const response = await axios.post(`${this.apiUrl}/refresh-token`, {
        refresh_token: refreshToken,
        expiresIn
      })
      console.log(this.apiUrl, response, "response,response")

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
      clear()
      window.location.href = PageEnum.BASE_LOGIN
      throw error
    }
    return ""
  }

  private isAccessTokenExpired(accessTokenExpiresIn: number | null): boolean {
    // 根据实际情况判断access_token是否过期
    // 这里假设你有一个方法可以获取access_token的有效期时间戳
    const currentTimeInSeconds = Math.floor(dayjs().valueOf() / 1000)
    const expirationTimestamp = accessTokenExpiresIn || null
    return !!expirationTimestamp && currentTimeInSeconds > expirationTimestamp
  }
}

export default DualTokenManager
