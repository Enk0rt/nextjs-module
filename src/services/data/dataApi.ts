import axios from "axios";
import {baseApiUrl} from "@/constants/constants";
import {refresh} from "@/services/auth/authUser";
import {setCookies} from "@/server-actions/setCookies";
import {redirect} from "next/navigation";
import {retrieveCookie} from "@/services/data/helpers/retrieveCookies";

export const axiosInstance = axios.create({
    baseURL: baseApiUrl,
    headers: {"Content-Type": "application/json"},
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const {accessToken} = await retrieveCookie()

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 && !error.config._retry) {

            try {
                const refreshResponse = await refresh()
                const {accessToken: accessToken, refreshToken: newRefreshToken} = await refreshResponse.json();
                await setCookies(accessToken, newRefreshToken)

                if (refreshResponse.status === 200) {
                    error.config.headers.Authorization = `Bearer ${accessToken}`;
                    return axiosInstance.request(error.config);
                }
            } catch {
                redirect('/')
            }
        }

        return Promise.reject(error);
    }
);
export const getApiData = async <T>(url: string): Promise<T> => {
    const response = await axiosInstance.get<T>(url);
    return response.data;
}
