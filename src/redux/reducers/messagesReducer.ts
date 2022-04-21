import {v1} from "uuid";
import {ActionType} from "../store";
import {ADD_MESSAGE, UPDATE_MESSAGE_TEXT} from "../types";
import React, {useState} from "react";

export type MessagesData = {
    id: string
    message: string
}

export type MessagesDataType = {
    messages: Array<MessagesData>,
    newMessageText: string
}

const initialState: MessagesDataType = {
    messages: [
        {id: v1(), message: "Hello"},
        {id: v1(), message: "How are you?"},
        {id: v1(), message: "Bye"},
    ],
    newMessageText: ""
}

const messagesReducer = (state = initialState, action: ActionType): MessagesDataType => {

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

export const addMessageAC = (): ActionType => ({
    type: ADD_MESSAGE
})

export const updateMessageTextAC = (messageText: string): ActionType => ({
    type: UPDATE_MESSAGE_TEXT,
    messageText
})

export default messagesReducer;