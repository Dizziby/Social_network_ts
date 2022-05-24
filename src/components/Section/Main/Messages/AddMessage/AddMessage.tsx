import React from 'react';
import {addMessageAC} from "../../../../../redux/reducers/messagesReducer";
import styles from "./AddMessage.module.css"
import {useAppDispatch} from "../../../../../redux/hooks";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm";

export const AddMessage = () => {

    const dispatch = useAppDispatch()

    const addNewMessage = (newMessage: string) => {
        dispatch(addMessageAC(newMessage))
    }

    return (
        <div className={styles.addMessage}>
            <AddMessageForm callback={(newMessage) => addNewMessage(newMessage)}/>
        </div>
    )
};