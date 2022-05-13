import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a85d113e-18ad-4422-b723-0a671fb9cb19"
    }
})

export const getFriends = (currentPageFoundFriends, pageSize) => {
    return instance.get(`users?page=${currentPageFoundFriends}&count=${pageSize}`).then(response => response.data)
}

