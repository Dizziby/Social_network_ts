import React, {ChangeEvent, useState} from "react";
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar.jpg"

const AddPost = () => {

    const [newPostText, setNewPostText] = useState("write something")

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPostText(e.currentTarget.value)
    }

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={userAvatar} alt=""/>
            </div>
            <div className={styles.item}>
                <input  value={newPostText} onChange={onChangeInput}/>
                <a href="#"><i className="fa-solid fa-music"> </i></a>
                <a href="#"><i className="fa-solid fa-image"> </i></a>
                <a href="#"><i className="fa-solid fa-video"> </i></a>
                <a href="#"><i className="fa-solid fa-camera"> </i></a>
                <button>Publish</button>
            </div>
        </div>
    )
}

export default AddPost;