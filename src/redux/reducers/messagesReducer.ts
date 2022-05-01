import {v1} from "uuid";
import {ADD_MESSAGE, UPDATE_MESSAGE_TEXT} from "../types";

export type MessagesData = {
    id: string
    message: string
}
export type MessagesDataType = {
    messages: Array<MessagesData>,
    newMessageText: string
}
type MessagesActionType = ReturnType<typeof addMessageAC> | ReturnType<typeof updateMessageTextAC>

const initialState: MessagesDataType = {
    messages: [
        {id: v1(), message: "Hello"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "Bye"},
    ],
    newMessageText: ""
}

const messagesReducer = (state = initialState, action: MessagesActionType): MessagesDataType => {

    switch (action.type) {
        case ADD_MESSAGE: {
            const stateCopy = {...state}
            stateCopy.messages = [...stateCopy.messages]
            stateCopy.messages.push({
                id: v1(),
                message: state.newMessageText
            })
            stateCopy.newMessageText = ""
            return stateCopy
        }
        case UPDATE_MESSAGE_TEXT: {
            const stateCopy = {...state}
            if (action.messageText) {
                stateCopy.newMessageText = action.messageText
            }
            return stateCopy
        }
        default:
            return state
    }
}

export const addMessageAC = () => ({
    type: ADD_MESSAGE
}) as const;

export const updateMessageTextAC = (messageText: string) => ({
    type: UPDATE_MESSAGE_TEXT,
    messageText
}) as const;

export default messagesReducer;