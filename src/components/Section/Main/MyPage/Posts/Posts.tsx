import React from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import {PostDataType} from "../../../../../redux/state";

export type PostsPropsType = {
    postData: PostDataType
}

const Posts: React.FC<PostsPropsType> = (props) => {

    const postElement = props.postData.map(post => <Post name={post.name} date={post.date} text={post.text}/>)

    return (
        <div className={styles.myPage}>
            {postElement}
        </div>
    )
}

export default Posts;