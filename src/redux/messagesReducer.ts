import {ActionType, MessagesDataType} from "./my_store";
import {v1} from "uuid";


const initialState: MessagesDataType = [
    {
        id: v1(),
        messages: ["Hello", "How are you?", "Bye",]
    },
    {
        id: v1(),
        messages: ["Hello2", "2How are you?", "Bye2",]
    },
]

const messagesReducer = (state = initialState, action: ActionType): MessagesDataType => {
    return state
}

export default messagesReducer;