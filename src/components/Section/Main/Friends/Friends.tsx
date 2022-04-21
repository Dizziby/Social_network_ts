import React from "react";
import styles from "../Friends/Friends.module.css";
import Friend from "./Friend/Friend";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {FriendsDataType} from "../../../../redux/reducers/friendsReducer";


const Friends = () => {
    const friendsData = useSelector<RootState, FriendsDataType>(state => state.friendsData)

    const friendElement = friendsData.map(friend => <Friend key={friend.id} name={friend.name} profession={friend.profession}/>)

    return (
        <div className={styles.friends}>
            <div className={styles.title}>
                My Friends
            </div>
            {friendElement}
        </div>
    )
}

export default Friends;