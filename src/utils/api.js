import axios from "axios"

const api = axios.create({
    baseURL: "https://ts-project-management-api-production.up.railway.app",
})

export default api;