import React from "react";
import styles from "./Profile.module.css"
import {AddPost} from "./AddPost/AddPost";
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {useAppSelector} from "../../../../redux/hooks";

export const Profile = () => {

    const authId = useAppSelector(state => state.auth.id)
    const profileId = useAppSelector(state => state.profileData.profile?.userId)

    if(authId === profileId) {
        return (
            <div className={styles.myPage}>
                <ProfileInfo />
                <AddPost />
                <Posts />
            </div>
        )
    } else {
        return (
            <div className={styles.myPage}>
                <ProfileInfo />
            </div>
        )
    }
}