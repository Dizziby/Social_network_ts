import React from "react";
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar.jpg"
import {addPostAC} from "../../../../../redux/reducers/profileReducer";
import {useAppDispatch} from "../../../../../redux/hooks";
import {AddPostForm} from "./AddPostForm/AddPostForm";

export const AddPost = () => {

    const dispatch = useAppDispatch()
    const addNewPost = (newPostText: string) => {
        dispatch(addPostAC(newPostText))
    }

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={userAvatar} alt=""/>
            </div>
            <AddPostForm callback={(newPostText) => {addNewPost(newPostText)}} />
        </div>
    )
}