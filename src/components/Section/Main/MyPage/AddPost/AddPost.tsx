import React from "react";
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar0.png"
import {addPostAC} from "../../../../../redux/reducers/profileReducer";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";
import {AddPostForm} from "./AddPostForm/AddPostForm";

export const AddPost = () => {

    const dispatch = useAppDispatch()
    const profileUserAvatar = useAppSelector(state => state.profileData.profile?.photos.large)


    const addNewPost = (newPostText: string) => {
        dispatch(addPostAC(newPostText))
    }

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={profileUserAvatar ? profileUserAvatar : userAvatar} alt=""/>
            </div>
            <AddPostForm callback={(newPostText) => {addNewPost(newPostText)}} />
        </div>
    )
}