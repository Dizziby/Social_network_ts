import React, {ChangeEvent} from "react";
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar.jpg"
import {faCamera, faImage, faMusic, faVideo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addPostAC, updatePostTextAC} from "../../../../../redux/reducers/postsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../redux/store";

const AddPost = () => {
    const dispatch = useDispatch()

    const newPostText = useSelector<RootState, string>(state => state.postsData.newPostText)

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
                          onChange={onChangeInputHandler}
                          placeholder="write something"
                />
                <a href="#"><FontAwesomeIcon icon={faMusic} size="lg"/></a>
                <a href="#"><FontAwesomeIcon icon={faImage} size="lg"/></a>
                <a href="#"><FontAwesomeIcon icon={faVideo} size="lg"/></a>
                <a href="#"><FontAwesomeIcon icon={faCamera} size="lg"/></a>
                <button onClick={onClickButtonHandler}>Publish</button>
            </div>
        </div>
    )
}

export default AddPost;