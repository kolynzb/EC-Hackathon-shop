import { AxiosRequestHeaders } from "axios";
import { axiosPrivate as instance } from "../config/axios";
import TokenService from "./token.service";
import urls from "./api.routes";

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      (config.headers as AxiosRequestHeaders)["Authorization"] =
        "Bearer " + token;
      (config.headers as AxiosRequestHeaders)["x-access-token"] = token; // for Node.js Express back-end
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
    if (originalConfig.url !== urls.login && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post(urls.refreshtoken, {
            refreshToken: TokenService.getLocalRefreshToken(),
          });
          const { accessToken } = rs.data;
          TokenService.updateLocalAccessToken(accessToken);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);
export default instance;

// https://www.bezkoder.com/react-refresh-token/
