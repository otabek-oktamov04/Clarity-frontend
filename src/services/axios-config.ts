import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const defaultOptions: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000, // 10 seconds
};

const axiosInstance: AxiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // Token is invalid or expired
      localStorage.removeItem("authToken");
      // Redirect to login page or refresh token
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
