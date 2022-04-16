import React, {ChangeEvent} from "react";
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar.jpg"
import {faCamera, faImage, faMusic, faVideo} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {addPostAC, updatePostTextAC} from "../../../../../redux/postsReducer";
import {ActionType} from "../../../../../redux/my_store";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../redux/store";

type AddPostType = {
    dispatch: (action:ActionType) => void
}

const AddPost: React.FC<AddPostType> = (props) => {

    const newPostText = useSelector<RootState, string | undefined>(state => state.postsData.newPostText)

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostTextAC(e.currentTarget.value))
    }

    const onClickButtonHandler = () => {
        if(newPostText !== undefined && newPostText.trim()) {
            props.dispatch(addPostAC())
        }
    }

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={userAvatar} alt=""/>
            </div>
            <div className={styles.item}>
                <textarea value={newPostText} onChange={onChangeInputHandler} placeholder="write something"/>
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