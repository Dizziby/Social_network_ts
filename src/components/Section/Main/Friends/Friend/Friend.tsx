import React from "react";
import styles from "./Friends.module.css";
import friendAvatar from "../../../../../img/Contacts/friend-avatar.jpg"

type FriendsPropsType = {
    id: number
    name: string
    profession: string
}

const Friend = (props: FriendsPropsType) => {
    return (
        <div className={styles.group}>
            <img src={friendAvatar} alt={props.name}/>
            <div>
                <a href="#">{props.name}</a>
                <div>{props.profession}</div>
            </div>
            <button className={styles.btn}>Unfriends</button>
            <button className={styles.btn}>Add Friend</button>
        </div>
    )
}

export default Friend;