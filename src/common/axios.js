import axios from "axios"
import Cookies from "js-cookie"

function getLocalAccessToken() {
  if (typeof window !== "undefined") {
    const accessToken = Cookies.get("token")
    return accessToken
  }
}
export const timeout = 15000
export const baseURL = "https://api.thepeerlearning.com/api/"
const instance = axios.create({
  baseURL,
  timeout,
  headers: {
    "Content-type": "application/json",
  },
})

instance.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken()
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalConfig = err.config
    if (originalConfig.url !== `/login` && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        try {
          window.location.href = "/"
          return instance(originalConfig)
        } catch (_error) {
          return Promise.reject(_error)
        }
      }
    }
    return Promise.reject(err)
  }
)
export default instance
