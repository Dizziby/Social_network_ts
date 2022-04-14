import React, {ChangeEvent} from "react";
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar.jpg"
import {faMusic, faImage, faVideo, faCamera} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type AddPostType = {
    addPost: (newPostText: string) => void
    updatePostText: (postText: string) => void
    newPostText: string
}

const AddPost: React.FC<AddPostType> = (props) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        if(props.newPostText.trim()) {
            props.addPost(props.newPostText);
        }
    }

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={userAvatar} alt=""/>
            </div>
            <div className={styles.item}>
                <textarea value={props.newPostText} onChange={onChangeInputHandler} placeholder="write something"/>
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