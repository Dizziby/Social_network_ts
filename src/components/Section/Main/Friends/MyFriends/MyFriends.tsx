import React from "react";
import styles from "./MyFriends.module.css";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../redux/store";
import {changeStatusFriendAC, FriendsType} from "../../../../../redux/reducers/friendsReducer";
import {Friend} from "../Friend/Friend";

type MyFriendsProps = {
    filter: boolean
}

export const MyFriends: React.FC<MyFriendsProps> = (props) => {

    const friendsData = useSelector<RootState, Array<FriendsType>>(state => state.friendsData.friends)

    const dispatch = useDispatch()

    const changeStatusFriend = (id: string) => {
        dispatch(changeStatusFriendAC(id))
    }

    let friendsDataFilter = friendsData;
    let friendsDataFilterTrue = friendsData.filter(el => el.followed)
    let friendsDataFilterFalse = friendsData.filter(el => !el.followed)

    if (props.filter) {
        friendsDataFilter = friendsDataFilterTrue
    } else {
        friendsDataFilter = friendsDataFilterFalse
    }

    const friendElement = friendsDataFilter.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}
                                                                  followed={friend.followed} photos={friend.photos}
                                                                  status={friend.status}
                                                                  callback={changeStatusFriend}/>)

    return (
        <div className={styles.myFriends}>
            {friendElement}
        </div>
    )
}