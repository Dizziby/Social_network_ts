import React from 'react';
import styles from "./Message.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../../../../redux/store";
import {MessagesData} from "../../../../../redux/reducers/messagesReducer";

export const Message = () => {

    const messages = useSelector<RootState, Array<MessagesData>>(state => state.messagesData.messages)

    const messageElement = messages.map(message => <div key={message.id}>{message.message}<hr></hr></div>)

    return (
        <div className={styles.message}>
            {messageElement}
        </div>
    );
};