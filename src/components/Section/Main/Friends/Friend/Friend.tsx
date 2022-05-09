import React from "react";
import styles from "./Friend.module.css";
import friendAvatar from "../../../../../img/Contacts/friend-avatar4.jpg"
import {Button} from "../../../../UIKit/Button";

type FriendsPropsType = {
    id: string
    name: string
    followed: boolean
    photos: string
    status: string
    callback: (id: string) => void
}

export const Friend = (props: FriendsPropsType) => {

    const onClickButtonHandler = () => {
        props.callback(props.id)
    }

    return (
        <div className={styles.friend}>
            <div className={styles.info}>
                <img src={/^http/.test(props.photos) ? props.photos : friendAvatar} alt={props.name}/>
                <a href="#">{props.name}</a>
            </div>
            <div>{props.status.length > 20 ? `${props.status.slice(0,20)}...` : props.status}</div>
            <Button name={props.followed ? "Unfriends" : "Add Friend"} status={props.followed}
                    callback={onClickButtonHandler}/>
        </div>
    )
}
