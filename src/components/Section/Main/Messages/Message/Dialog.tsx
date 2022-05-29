import React from 'react';
import styles from "./Dialog.module.css"
import {useAppSelector} from "../../../../../redux/hooks";
import {Message} from "./Message/Message";
import friendAvatar from "../../../../../img/Contacts/friend-avatar4.jpg";

export const Dialog = () => {

    const messages = useAppSelector(state => state.messagesData.messages)

    const messageElement = messages.map(message => <div key={message.id}><Message text={message.message}/></div>)

    return (
        <div className={styles.dialog}>
            <div className={styles.contact}>
                <div className={styles.avatar}>
                    <img src={friendAvatar} alt={"Jason Bourne"}/>
                </div>
                <div className={styles.name}>
                    Jason Bourne
                </div>
                <div className={styles.online}>Online</div>
            </div>
            <div className={styles.messages}>
                {messageElement}
            </div>
        </div>
    );
};