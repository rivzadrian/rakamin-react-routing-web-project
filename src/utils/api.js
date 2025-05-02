import axios from "axios";

const api = axios.create({
  baseURL: "https://ts-project-management-api-production.up.railway.app",
});

//interceptor untuk attach authorization token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
