import React, {ChangeEvent, useState} from "react";
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar.jpg"

type AddPostType = {
    addPost: (newPostText: string) => void
}

const AddPost: React.FC<AddPostType> = (props) => {

    const [newPostText, setNewPostText] = useState("")

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPostText(e.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addPost(newPostText);
        console.log(newPostText)

    }

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={userAvatar} alt=""/>
            </div>
            <div className={styles.item}>
                <input  value={newPostText} onChange={onChangeInput} placeholder="write something"/>
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