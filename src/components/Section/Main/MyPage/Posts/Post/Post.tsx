import React from "react";
import styles from "./Post.module.css"
import userAvatar from "../../../../../../img/user-avatar.jpg"
import {faComment, faEye, faHeart, faHeartCrack, faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {deletePostAC} from "../../../../../../redux/reducers/postsReducer";
import {useAppDispatch} from "../../../../../../redux/hooks";

type PostPropsType = {
    id: string
    name: string
    date: string
    text: string | undefined
    views: number
    comments: number
    like: number
    dislike: number
}

const Post = (props: PostPropsType) => {

    const dispatch = useAppDispatch()

    const onClickButtonHandler = (id: string) => {
        dispatch(deletePostAC(id))
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
                    <span><FontAwesomeIcon className={styles.icon} icon={faEye} size="lg"/>{props.views}</span>
                    <span><FontAwesomeIcon className={styles.icon} icon={faComment} size="lg"/> {props.comments}</span>
                    <span><FontAwesomeIcon className={styles.icon} icon={faHeart} size="lg"/> {props.like}</span>
                    <span><FontAwesomeIcon className={styles.icon} icon={faHeartCrack}
                                           size="lg"/> {props.dislike}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;