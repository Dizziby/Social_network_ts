import React from "react";
import styles from "./MyPage.module.css"
import {AddPost} from "./AddPost/AddPost";
import {Posts} from "./Posts/Posts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const MyPage = () => {
    return (
        <div className={styles.myPage}>
            <ProfileInfo />
            <AddPost />
            <Posts />
        </div>
    )
}