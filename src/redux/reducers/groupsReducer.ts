import {v1} from "uuid";

export type GroupType = {
    id: string
    name: string
    follow: number
    type: string
    logo: string
}
export type GroupsDataType = Array<GroupType>
type GroupActionType = {
    type: string
}

const initialState: GroupsDataType = [
    {id: v1(), name: "Funparty", follow: 32, type: "Public", logo: "group1"},
    {id: v1(), name: "ABC News", follow: 5, type: "Private", logo: "group2"},
    {id: v1(), name: "SEO Zone", follow: 32, type: "Public", logo: "group3"},
    {id: v1(), name: "Max Us", follow: 7, type: "Public", logo: "group4"},
    {id: v1(), name: "Banana Friend", follow: 756, type: "Friends", logo: "group5"},
    {id: v1(), name: "Bad Boys N Girls", follow: 32, type: "Public", logo: "group6"},
    {id: v1(), name: "Bachelor's Fun", follow: 50, type: "Public", logo: "group7"}
]

const groupsReducer = (state = initialState, action: GroupActionType): GroupsDataType => {
    return state
}

export default groupsReducer;