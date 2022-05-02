import React, {useEffect} from "react";
import styles from "./FindFriends.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Friend} from "../Friend/Friend";
import {RootState} from "../../../../../redux/store";
import {addFriendsAC, FriendsType, setFriendsAC} from "../../../../../redux/reducers/friendsReducer";
import axios from "axios";

// type FriendsTypeGet = {
//     id: number;
//     name: string;
//     aliases: string[];
//     occupation: string;
//     gender: string;
//     height: {ft: number; in: number;}
//     hair: string;
//     eyes: string;
//     powers: string[]
// }


export const FindFriends = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            const friends = response.data.items.map((el: any) => ({
                id: el.id,
                name: el.name,
                followed: el.followed,
                photos: el.photos.small === null ? el.name : el.photos.small,
                status: el.status === null ? "..." : el.status
            }))
            dispatch(setFriendsAC(friends))
            console.log(friends)
        })
    }, [])


    const addFriends = (id: string) => {
        dispatch(addFriendsAC(id))
    }

    const friendsFindData = useSelector<RootState, Array<FriendsType>>(state => state.friendsData.findFriends)

    const friendsFindElement = friendsFindData.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}
                                                                     followed={friend.followed} photos={friend.photos}
                                                                     status={friend.status}
                                                                     callback={addFriends}/>)

    return (
        <div className={styles.findFriends}>
            {friendsFindElement}
        </div>
    )
}