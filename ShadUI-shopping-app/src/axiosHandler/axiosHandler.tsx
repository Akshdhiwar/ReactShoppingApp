import axios from "axios"
import { baseURL } from "../Constants/api"



const axiosHttp = axios.create({
    baseURL: baseURL
})

function getAccessToken() {
    const data = localStorage.getItem("sb-jztymizzcfssbjauqsrq-auth-token")
    if (data === null) return null
    return JSON.parse(data)
}

axiosHttp.interceptors.request.use(
    config => {
        const accessToken: any = getAccessToken()

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken.access_token}`
        }

        return config
    },
    (error) => {
        Promise.reject(error);
    }
)

export default axiosHttp