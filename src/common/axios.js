import axios from "axios";

function getLocalAccessToken() {
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken;
  }
}

function getLocalRefreshToken() {
  if (typeof window !== "undefined") {
    const refreshToken = localStorage.getItem("refreshToken");
    return refreshToken;
  }
}

export const baseURL = "https://stagingapi.thepeerlearning.com/api/v1";
export const timeout = 15000;
const instance = axios.create({
  baseURL,
  timeout,
  headers: {
    "Content-type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axios.get(`${baseURL}/user/token/refresh`, {
            refresh: true,
          });

          if (rs.status === 200) {
            const { accessToken, refreshToken } = res.data;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            instance.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${accessToken}`;
            return instance(originalRequest);
          }
        } catch (_error) {
          if (_error.response && _error.response.data) {
            return Promise.reject(_error.response.data);
          }

          return Promise.reject(_error);
        }
      }

      if (err.response.status === 403 && err.response.data) {
        return Promise.reject(err.response.data);
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
