import React from 'react';
import styles from "./Message.module.css"
import {useAppSelector} from "../../../../../redux/hooks";

export const Message = () => {

    const messages = useAppSelector(state => state.messagesData.messages)

    const messageElement = messages.map(message => <div key={message.id}>{message.message}<hr></hr></div>)

    return (
        <div className={styles.message}>
            {messageElement}
        </div>
    );
};