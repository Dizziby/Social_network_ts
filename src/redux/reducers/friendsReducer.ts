import {v1} from "uuid";
import {
    ADD_FRIEND,
    CHANGE_FRIEND_STATUS,
    DELETE_FRIEND,
    SET_CURRENT_PAGE,
    SET_FRIENDS,
    SET_TOTAL_FOUND_FRIENDS,
    SHOW_MORE_FOUND_FRIENDS,
    TOGGLE_IS_RECEIVED
} from "../types";

export type FriendsType = {
    id: string
    name: string
    followed: boolean
    photos: string
    status: string
    email: string
}
export type FriendsDataType = {
    friends: Array<FriendsType>
    foundFriends: Array<FriendsType>
    pageSize: number
    totalFoundFriends: number
    currentPageFoundFriends: number
    isReceived: boolean
}
type FriendsActionType =
    ReturnType<typeof changeStatusFriendAC>
    | ReturnType<typeof addFriendsAC>
    | ReturnType<typeof deleteFriendsAC>
    | ReturnType<typeof setFriendsAC>
    | ReturnType<typeof snowMoreFoundFriendsAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalFoundFriendsAC>
    | ReturnType<typeof toggleIsReceivedAC>


const initialState: FriendsDataType = {
    friends: [
        {
            id: v1(),
            name: "Jhon Kates",
            followed: true,
            photos: "Jhon Kates",
            status: "I'm OK",
            email: 'jhonkates@gmail.com'
        },
        {
            id: v1(),
            name: "Sophia Gate",
            followed: true,
            photos: "Sophia Gate",
            status: "I'm OK",
            email: 'sophiagate@gmail.com'
        },
        {
            id: v1(),
            name: "Sara Grey",
            followed: true,
            photos: "Sara Grey",
            status: "I'm OK",
            email: 'saragrey@gmail.com'
        },
        {id: v1(), name: "Sexy Cat", followed: true, photos: "Sexy Cat", status: "I'm OK", email: 'sexycat@gmail.com'},
        {
            id: v1(),
            name: "Amy Watson",
            followed: true,
            photos: "Amy Watson",
            status: "I'm OK",
            email: 'amywatson@gmail.com'
        },
        {
            id: v1(),
            name: "Amelia Span",
            followed: true,
            photos: "Amelia Span",
            status: "I'm OK",
            email: 'ameliaspan@gmail.com'
        },
        {id: v1(), name: "Isla Ken", followed: false, photos: "Isla Ken", status: "I'm OK", email: 'islaken@gmail.com'},
        {id: v1(), name: "Ruby Cry", followed: false, photos: "Ruby Cry", status: "I'm OK", email: 'rubycry@gmail.com'},
        {
            id: v1(),
            name: "Ella Wins",
            followed: false,
            photos: "Ella Wins",
            status: "I'm OK",
            email: 'ellawins@gmail.com'
        },
        {
            id: v1(),
            name: "Harry Potter",
            followed: false,
            photos: "Harry Potter",
            status: "I'm OK",
            email: 'harrypotter@gmail.com'
        },
        {
            id: v1(),
            name: "James Born",
            followed: false,
            photos: "James Born",
            status: "I'm OK",
            email: 'jamesborn@gmail.com'
        }
    ],
    foundFriends: [],

    pageSize: 10,
    totalFoundFriends: 12,
    currentPageFoundFriends: 1,
    isReceived: false
}

export const friendsReducer = (state = initialState, action: FriendsActionType): FriendsDataType => {
    debugger
    switch (action.type) {
        case CHANGE_FRIEND_STATUS: {
            return {
                ...state,
                friends: state.friends.map(el => el.id === action.id ? {...el, followed: !el.followed} : el)
            }
        }
        case ADD_FRIEND: {
            return {
                ...state,
                foundFriends: state.foundFriends.map(el => el.id === action.id ? {...el, followed: true} : el)
            }
        }
        case DELETE_FRIEND: {
            return {
                ...state,
                foundFriends: state.foundFriends.map(el => el.id === action.id ? {...el, followed: false} : el)
            }
        }
        case SET_FRIENDS: {
            return {...state, foundFriends: action.friends}
        }
        case SHOW_MORE_FOUND_FRIENDS: {
            return {...state, pageSize: state.pageSize + 10}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPageFoundFriends: action.currentPage}
        }
        case SET_TOTAL_FOUND_FRIENDS: {
            return {...state, totalFoundFriends: action.totalCount}
        }
        case TOGGLE_IS_RECEIVED: {
            return {...state, isReceived: action.isReceived}
        }
        default:
            return state
    }
}

export const changeStatusFriendAC = (id: string) => ({
    type: CHANGE_FRIEND_STATUS,
    id
}) as const

export const addFriendsAC = (id: string) => ({
    type: ADD_FRIEND,
    id
}) as const

export const deleteFriendsAC = (id: string) => ({
    type: DELETE_FRIEND,
    id
}) as const

export const setFriendsAC = (friends: Array<FriendsType>) => ({
    type: SET_FRIENDS,
    friends
}) as const

export const snowMoreFoundFriendsAC = () => ({
    type: SHOW_MORE_FOUND_FRIENDS
}) as const

export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage
}) as const

export const setTotalFoundFriendsAC = (totalCount: number) => ({
    type: SET_TOTAL_FOUND_FRIENDS,
    totalCount
}) as const

export const toggleIsReceivedAC = (isReceived: boolean) => ({
    type: TOGGLE_IS_RECEIVED,
    isReceived
}) as const