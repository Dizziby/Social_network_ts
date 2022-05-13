import React, {ChangeEvent} from "react";
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar.jpg"
import {faCamera, faImage, faMusic, faVideo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addPostAC, updatePostTextAC} from "../../../../../redux/reducers/profileReducer";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";

export const AddPost = () => {
    const dispatch = useAppDispatch()

    const newPostText = useAppSelector(state => state.profileData.newPostText)

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updatePostTextAC(e.currentTarget.value))
    }

    const onClickButtonHandler = () => {
        if (newPostText.trim()) {
            dispatch(addPostAC())
        }
    }

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={userAvatar} alt=""/>
            </div>
            <div className={styles.item}>
                <textarea value={newPostText}
                          placeholder="write something"
                          onChange={onChangeInputHandler}
                />
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faMusic} size="lg"/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faImage} size="lg"/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faVideo} size="lg"/></a>
                <a href="#"><FontAwesomeIcon className={styles.icon} icon={faCamera} size="lg"/></a>
                <button onClick={onClickButtonHandler}>Publish</button>
            </div>
        </div>
    )
}