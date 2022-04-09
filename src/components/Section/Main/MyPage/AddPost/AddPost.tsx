import React, {ChangeEvent} from "react";
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar.jpg"

type AddPostType = {
    addPost: (newPostText: string) => void
    updatePostText: (postText: string) => void
    newPostText: string
}

const AddPost: React.FC<AddPostType> = (props) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.updatePostText(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addPost(props.newPostText);
        console.log(props.newPostText)
    }

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={userAvatar} alt=""/>
            </div>
            <div className={styles.item}>
                <input value={props.newPostText} onChange={onChangeInputHandler} placeholder="write something"/>
                <a href="#"><i className="fa-solid fa-music"> </i></a>
                <a href="#"><i className="fa-solid fa-image"> </i></a>
                <a href="#"><i className="fa-solid fa-video"> </i></a>
                <a href="#"><i className="fa-solid fa-camera"> </i></a>
                <button onClick={onClickButtonHandler}>Publish</button>
            </div>
        </div>
    )
}

export default AddPost;