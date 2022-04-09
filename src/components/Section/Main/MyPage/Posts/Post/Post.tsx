import React from "react";
import styles from "./Post.module.css"
import userAvatar from "../../../../../../img/user-avatar.jpg"

type PostPropsType = {
    name: string
    date: string
    text: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={styles.post}>
            <div>
                <div className={styles.info}>
                    <div className={styles.avatar}>
                        <img src={userAvatar} alt="logo"/>
                    </div>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.date}>Published: {props.date}</div>
                </div>

                <div className={styles.text}>{props.text}</div>
            </div>
        </div>
    )
}

export default Post;