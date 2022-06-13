import axios from "axios";
import {ContactsProfileType, PhotosProfileType, ProfileType} from "../redux/reducers/profileReducer";

// typing

type FollowingUserResponseType = {
    resultCode: number
    messages: string[],
    data: {}
}

type GetUserResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
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

type updateStatusProfileResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

type updatePhotoProfileResponseType = {
    resultCode: number
    messages: string[]
    data: PhotosProfileType
}

type authMeResponseType = {
    resultCode: number
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}

type loginResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

type logoutResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}

export type updateProfileInfoRequestType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsProfileType
}

type updateProfileInfoResponseType = {
    resultCode: number
    messages: string[]
    data: {}
}




// api

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a85d113e-18ad-4422-b723-0a671fb9cb19"
    }
})

export const friendsAPI = {
    getUsers(currentPageFoundFriends: number, pageSize: number) {
        return instance.get<GetUserResponseType>(`users?page=${currentPageFoundFriends}&count=${pageSize}`).then(response => response.data)
    },
    followingUser(id: string) {
        return instance.post<FollowingUserResponseType>(`follow/${id}`)
    },
    unfollowingUser(id: string) {
        return instance.delete<FollowingUserResponseType>(`follow/${id}`)
    },
}

export const profileAPI = {
    getUserProfile(id: number) {
        return instance.get<ProfileType>(`profile/${id}`)
    },
    getStatusProfile(id: number) {
        return instance.get<any>(`profile/status/${id}`)
    },
    updateStatusProfile(statusText: string) {
        return instance.put<updateStatusProfileResponseType>("profile/status", {status: statusText})
    },
    updatePhotoProfile(photo: any) {
        const formData = new FormData()
        formData.append("image", photo)
        return instance.put<updatePhotoProfileResponseType>("profile/photo", formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },
    updateProfileInfo(info: updateProfileInfoRequestType) {
        return instance.put<updateProfileInfoResponseType>("profile", {info})
    }
}

export const authAPI = {
    authMe() {
        return instance.get<authMeResponseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post<loginResponseType>(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete<logoutResponseType>(`auth/login`)
    },
}