import {v1} from "uuid";
import {ADD_FRIEND, CHANGE_FRIEND_STATUS, SET_FRIENDS} from "../types";

export type FriendsType = {
    id: string
    name: string
    followed: boolean
    photos: string
    status: string
}
export type FriendsDataType = {
    friends: Array<FriendsType>
    findFriends: Array<FriendsType>
}
type FriendsActionType = ReturnType<typeof changeStatusFriendAC> | ReturnType<typeof addFriendsAC> | ReturnType<typeof setFriendsAC>

const initialState: FriendsDataType = {
    friends: [
        {id: v1(), name: "Jhon Kates", followed: true, photos: "Jhon Kates", status: "I'm OK"},
        {id: v1(), name: "Sophia Gate", followed: true, photos: "Sophia Gate", status: "I'm OK"},
        {id: v1(), name: "Sara Grey", followed: true, photos: "Sara Grey", status: "I'm OK"},
        {id: v1(), name: "Sexy Cat", followed: true, photos: "Sexy Cat", status: "I'm OK"},
        {id: v1(), name: "Sara Grey", followed: true, photos: "Sara Grey", status: "I'm OK"},
        {id: v1(), name: "Amy Watson", followed: true, photos: "Amy Watson", status: "I'm OK"},
        {id: v1(), name: "2Jhon Kates", followed: false, photos: "2Jhon Kates", status: "I'm OK"},
        {id: v1(), name: "2Sophia Gate", followed: false, photos: "2Sophia Gate", status: "I'm OK"},
        {id: v1(), name: "2Sara Grey", followed: false, photos: "2Sara Greys", status: "I'm OK"},
        {id: v1(), name: "2Sexy Cat", followed: false, photos: "2Sexy Cat", status: "I'm OK"},
        {id: v1(), name: "2Sara Grey", followed: false, photos: "2Sara Grey", status: "I'm OK"},
        {id: v1(), name: "2Amy Watson", followed: false, photos: "2Amy Watson", status: "I'm OK"}
    ],
    findFriends: [
        {id: v1(), name: "3Jhon Kates", followed: false, photos: "Jhon Kates", status: "I'm OK"},
        {id: v1(), name: "3Sophia Gate", followed: false, photos: "Sophia Gate", status: "I'm OK"},
        {id: v1(), name: "3Sara Grey", followed: false, photos: "Sara Grey", status: "I'm OK"}
    ]
}

export const friendsReducer = (state = initialState, action: FriendsActionType): FriendsDataType => {
    debugger
    switch (action.type) {
        case CHANGE_FRIEND_STATUS: {
            const stateCopy = {...state}
            stateCopy.friends = [...state.friends]
            stateCopy.friends = stateCopy.friends.map(el => el.id === action.id ? {...el, followed: !el.followed} : el)
            return stateCopy
        }
        case ADD_FRIEND: {
            const copyState = {...state}
            // const newFriend = state.findFriends.filter(el => el.id === action.id ? {...el, followed: true} : "")
            const newFriend = state.findFriends.find(el => el.id === action.id)
            console.log(newFriend)
            if(newFriend) {
                copyState.friends = [...state.friends, newFriend]
            }
            const newfindFriends = state.findFriends.filter(el => el.id !== action.id)
            copyState.findFriends = newfindFriends
            return copyState
        }
        case SET_FRIENDS: {
            const copyState = {...state}
            copyState.findFriends = action.friends
            return copyState
        }
    }
    return state
}

export const changeStatusFriendAC = (id: string) => ({
    type: CHANGE_FRIEND_STATUS,
    id
}) as const

export const addFriendsAC = (id: string) => ({
    type: ADD_FRIEND,
    id
}) as const

export const setFriendsAC = (friends: Array<FriendsType>) => ({
    type: SET_FRIENDS,
    friends
}) as const