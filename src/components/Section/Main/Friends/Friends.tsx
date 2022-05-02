import React, {useState} from "react";
import styles from "../Friends/Friends.module.css";
import Friend from "./Friend/Friend";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {FriendsType} from "../../../../redux/reducers/friendsReducer";

export const Friends = () => {

    const friendsData = useSelector<RootState, Array<FriendsType>>(state => state.friendsData.friends)

    const [filter, setFilter] = useState(true)

    let friendsDataFilter = friendsData;
    let friendsDataFilterTrue = friendsData.filter(el => el.status)
    let friendsDataFilterFalse = friendsData.filter(el => !el.status)

    if (filter) {
        friendsDataFilter = friendsDataFilterTrue
    } else {
        friendsDataFilter = friendsDataFilterFalse
    }

    const friendElement = friendsDataFilter.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}
                                                                  profession={friend.profession}
                                                                  status={friend.status}/>)

    return (
        <div className={styles.friends}>
            <div className={styles.title}>
                <div className={styles.titleItem}>
                    <button onClick={() => setFilter(true)}>My Friends</button>
                </div>
                <b>{friendsDataFilterTrue.length}</b>
                <div className={styles.titleItem}>
                    <button onClick={() => setFilter(false)}>Friend Requests</button>
                </div>
                <b>{friendsDataFilterFalse.length}</b>
            </div>

            {friendElement}
        </div>
    )
}