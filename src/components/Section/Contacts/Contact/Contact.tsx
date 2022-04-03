import React from "react";
import styles from "./Contact.module.css";

import friendAvatar from "../../../../img/Contacts/friend-avatar.jpg"


type ContactPropsType = {
    name: string
    email: string
    avatar: string
}

const Contact = (props: ContactPropsType) => {
    debugger
    return (
        <div className={styles.contact}>
            <div className={styles.avatar}>
                <img src={friendAvatar} alt={props.avatar}/>
            </div>
            <div className={styles.name}>
                <a href="#">{props.name}</a>
            </div>
            <div className={styles.email}>{props.email}</div>
        </div>
    )
}

export default Contact;