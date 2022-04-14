import React from "react";
import styles from "./Post.module.css"
import userAvatar from "../../../../../../img/user-avatar.jpg"
import {faEye, faHeart, faHeartCrack, faComment, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type PostPropsType = {
    id: string
    name: string
    date: string
    text: string
    views: number
    comments: number
    like: number
    dislike: number
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
                        <button onClick={() => onClickButtonHandler(props.id)}>
                            <FontAwesomeIcon icon={faXmark} size="lg"/></button>
                    </div>
                </div>
            </div>
            <div className={styles.text}>
                {props.text}
                <div className={styles.icons}>
                    <span className={styles.icon}><FontAwesomeIcon icon={faEye} size="lg"/>{props.views}</span>
                    <span className={styles.icon}><FontAwesomeIcon icon={faComment} size="lg"/> {props.comments}</span>
                    <span className={styles.icon}><FontAwesomeIcon icon={faHeart} size="lg"/> {props.like}</span>
                    <span className={styles.icon}><FontAwesomeIcon icon={faHeartCrack}
                                                                   size="lg"/> {props.dislike}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;