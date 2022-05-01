import React from "react";
import styles from "./Friend.module.css";
import friendAvatar from "../../../../../img/Contacts/friend-avatar.jpg"
import {Button} from "../../../../other/Button";
import {changeStatusFriendAC} from "../../../../../redux/reducers/friendsReducer";
import {useDispatch} from "react-redux";

type FriendsPropsType = {
    id: string
    name: string
    profession: string
    status: boolean
}

const Friend = (props: FriendsPropsType) => {

    const dispatch = useDispatch()

    const changeStatusFriend = () => {
        dispatch(changeStatusFriendAC(props.id))
    }

    return (
        <div className={styles.friend}>
            <div className={styles.info}>
                <img src={friendAvatar} alt={props.name}/>
                <div>
                    <a href="#">{props.name}</a>
                    <div>{props.profession}</div>
                </div>
            </div>
            <div className={styles.btn}>
                <Button name={props.status ? "Unfriends" : "Add Friend"} status={props.status}
                        callback={changeStatusFriend}/>
            </div>
        </div>
    )
}

export default Friend;