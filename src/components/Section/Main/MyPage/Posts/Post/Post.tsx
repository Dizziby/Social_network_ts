import React from "react";
import styles from "./Post.module.css"
import userAvatar from "../../../../../../img/user-avatar.jpg"

type PostPropsType = {
    id: string
    name: string
    date: string
    text: string
    deletePost: (id: string) => void
}

const Post = (props: PostPropsType) => {

    const onClickButtonHandler = (id: string) => {
        props.deletePost(id)
    }

    return (
        <div className={styles.post}>
            <div className={styles.title}>
                <div className={styles.avatar}>
                    <img src={userAvatar} alt="logo"/>
                </div>
                <div className={styles.info}>
                    <div>
                        <div className={styles.name}>{props.name}</div>
                        <div className={styles.date}>Published: {props.date}</div>
                    </div>
                    <div>
                        <button onClick={() => onClickButtonHandler(props.id)}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
            </div>
            <div className={styles.text}>{props.text}</div>
        </div>
    )
}

export default Post;