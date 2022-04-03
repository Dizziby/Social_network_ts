import React from "react";
import styles from "./AddPost.module.css"
import userAvatar from "../../../../../img/user-avatar.jpg"

const AddPost = () => {

    let newPostText = "write something"

    return (
        <div className={styles.addPost}>
            <div className={styles.avatar}>
                <img src={userAvatar} alt=""/>
            </div>
            <div className={styles.item}>
                <textarea className={styles.textarea}></textarea>
                <button className={styles.btn}>Publish</button>
            </div>
        </div>
    )
}

export default AddPost;