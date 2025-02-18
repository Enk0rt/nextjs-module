import axios from "axios";
import {cookies} from "next/headers";
import {baseApiUrl} from "@/constants/constants";
import {IUserResponse} from "@/models/user/IUserResponse";
import {refresh} from "@/services/auth/authUser";

export const axiosInstance = axios.create({
    baseURL: baseApiUrl,
    headers: {"Content-Type": "application/json"},
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const userAccessToken = (await cookies()).get("accessToken")?.value;

        if (userAccessToken) {
            config.headers.Authorization = `Bearer ${userAccessToken}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 && !error.config._retry) {
            console.warn("Access token expired, refreshing...");
            error.config._retry = true;

            try {
                console.log("START REFRESHING...")
                const refreshResponse = await refresh()
                const {accessToken: accessToken, refreshToken: newRefreshToken} = await refreshResponse.json();

                console.log("NEW REFRESH TOKEN RECEIVED - "+newRefreshToken)
                // ЯК ТУТ ЗАСЕТАТЬ ОТРИМАНІ КУКІ

                if (refreshResponse.status === 200) {
                    console.log("TRYING TO GET USERS AGAIN...")
                    error.config.headers.Authorization = `Bearer ${accessToken}`;
                    console.log("SUCCESS")
                    return axiosInstance.request(error.config);
                }
            } catch (refreshError) {
                console.error("Failed to refresh token", refreshError);
                throw new Error("Session expired, please log in again.");
            }
        }

        return Promise.reject(error);
    }
);
export const getUsers = async () => {
    const response = await axiosInstance.get<IUserResponse>("/auth/users");
    return response.data;
};
