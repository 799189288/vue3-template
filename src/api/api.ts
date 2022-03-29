import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { baseUrl } from "@/config";
const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 30000,
});
axiosInstance.interceptors.response.use((response: AxiosResponse) =>
  console.log(response)
);
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) =>
  console.log(config)
);
