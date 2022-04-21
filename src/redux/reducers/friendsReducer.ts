import {v1} from "uuid";
import {ActionType} from "../store";

export type FriendsType = {
    id: string
    name: string
    profession: string
}
export type FriendsDataType = Array<FriendsType>

const initialState: FriendsDataType = [
    {id: v1(), name: "Jhon Kates", profession: "Ftv Model"},
    {id: v1(), name: "Sophia Gate", profession: "Tv Actresses"},
    {id: v1(), name: "Sara Grey", profession: "Work At IBM"},
    {id: v1(), name: "Sexy Cat", profession: "Student"},
    {id: v1(), name: "Sara Grey", profession: "Ftv Model"},
    {id: v1(), name: "Amy Watson", profession: "Study In University"},
]

const friendsReducer = (state = initialState, action: ActionType): FriendsDataType => {
    return state
}

export default friendsReducer;