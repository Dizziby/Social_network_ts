import React from 'react';
import styles from "./Message.module.css";
import userAvatar from "../../../../../../img/user-avatar.jpg";

type MessagePropsType = {
    text: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img src={userAvatar} alt="logo"/>
            </div>
            <div className={styles.text}>{props.text}</div>
        </div>
    );
};
