import {v1} from "uuid";
import {CHANGE_FRIEND_STATUS} from "../types";

export type FriendsType = {
    id: string
    name: string
    profession: string
    status: boolean
}
export type FriendsDataType = {
    friends: Array<FriendsType>
}
type FriendsActionType = ReturnType<typeof changeStatusFriendAC>

const initialState: FriendsDataType = {
    friends: [
        {id: v1(), name: "Jhon Kates", profession: "Ftv Model", status: true},
        {id: v1(), name: "Sophia Gate", profession: "Tv Actresses", status: true},
        {id: v1(), name: "Sara Grey", profession: "Work At IBM", status: true},
        {id: v1(), name: "Sexy Cat", profession: "Student", status: true},
        {id: v1(), name: "Sara Grey", profession: "Ftv Model", status: true},
        {id: v1(), name: "Amy Watson", profession: "Study In University", status: true},
        {id: v1(), name: "2Jhon Kates", profession: "Ftv Model", status: false},
        {id: v1(), name: "2Sophia Gate", profession: "Tv Actresses", status: false},
        {id: v1(), name: "2Sara Grey", profession: "Work At IBM", status: false},
        {id: v1(), name: "2Sexy Cat", profession: "Student", status: false},
        {id: v1(), name: "2Sara Grey", profession: "Ftv Model", status: false},
        {id: v1(), name: "2Amy Watson", profession: "Study In University", status: false},
    ]
}

export const friendsReducer = (state = initialState, action: FriendsActionType): FriendsDataType => {
    switch (action.type) {
        case CHANGE_FRIEND_STATUS: {
            const stateCopy = {...state}
            stateCopy.friends = [...state.friends]
            stateCopy.friends = stateCopy.friends.map(el => el.id === action.id ? {...el, status: !el.status} : el)
            return stateCopy
        }
    }
    return state
}

export const changeStatusFriendAC = (id: string) => ({
    type: CHANGE_FRIEND_STATUS,
    id
}) as const