import axios from "axios";
import {ProfileType} from "../redux/reducers/profileReducer";

type FollowType = {
    resultCode: number
    messages: string[],
    data: {}
}

type UserType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

type UsersGetType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a85d113e-18ad-4422-b723-0a671fb9cb19"
    }
})

export const api = {
    getUsers (currentPageFoundFriends: number, pageSize: number) {
        return instance.get<UsersGetType>(`users?page=${currentPageFoundFriends}&count=${pageSize}`).then(response => response.data)
    },
     followingUser (id: string) {
        return instance.post<FollowType>(`follow/${id}`)
    },
    unfollowingUser (id: string) {
        return instance.delete<FollowType>(`follow/${id}`)
    },
}

export const profileAPI = {
    getUserProfile (id: string) {
        return instance.get<ProfileType>(`profile/${id}`)
    },
    getStatusProfile (id: string) {
        return instance.get<any>(`profile/status/${id}`)
    },
    updateStatusProfile (statusText: string) {
        return instance.put<any>("profile/status", {status: statusText})
    },
}

export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
    },
    login (email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    },
}