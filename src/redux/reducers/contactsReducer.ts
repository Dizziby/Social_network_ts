import {v1} from "uuid";
import {ActionType} from "../store";


export type ContactType = {
    id: string
    name: string
    email: string
    avatar: string
}
export type ContactsDataType = Array<ContactType>


const initialState: ContactsDataType = [
    {id: v1(), name: 'Bucky Bames', email: 'wintersolder@gmail.com', avatar: "friendAvatar"},
    {id: v1(), name: 'Sarah Lorender', email: 'barnes@gmail.com', avatar: "friendAvatar2"},
    {id: v1(), name: 'Jason Borne', email: 'jasonb@gmail.com', avatar: "friendAvatar3"},
    {id: v1(), name: 'Cameron Diaz', email: 'jasonb@gmail.com', avatar: "friendAvatar4"},
    {id: v1(), name: 'Daniel Warber', email: 'jasonb@gmail.com', avatar: "friendAvatar5"},
    {id: v1(), name: 'Andrew', email: 'jasonb@gmail.com', avatar: "friendAvatar6"},
    {id: v1(), name: 'Amy Watson', email: 'jasonb@gmail.com', avatar: "friendAvatar7"},
]

const contactsReducer = (state = initialState, action: ActionType): ContactsDataType => {
    return state
}

export default contactsReducer;