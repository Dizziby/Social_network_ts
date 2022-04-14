import React from 'react';
import styles from "./Message.module.css"

type MessagePropsType = {
    messages: Array<string>
    id: string
}

const Message: React.FC<MessagePropsType> = (props) => {

    return (
        <div className={styles.message}>
            {props.messages.map(message => <div>{message}</div>)}
        </div>
    );
};

export default Message;