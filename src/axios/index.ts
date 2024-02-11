import axios from "axios";
import { env } from "../env";

export const api = axios.create({
  baseURL: env.VITE_BASE_URL,
});

console.log(import.meta.env);

api.interceptors.request.use(
  (config) => {
    config.headers["company-id"] = "602d377564ed52767a1b4192";
    // config.headers.mtp_setup = 2

    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
