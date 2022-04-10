import React from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import {PostDataType} from "../../../../../redux/state";

export type PostsPropsType = {
    postData: PostDataType
    deletePost: (id: string) => void
}

const Posts: React.FC<PostsPropsType> = (props) => {

    const postElement = props.postData.posts.map(post => <Post key={post.id} id={post.id} name={post.name}
                                                               date={post.date} text={post.text}
                                                               views={post.views} comments={post.comments}
                                                               like={post.like} dislike={post.dislike}
                                                               deletePost={props.deletePost}

    />)

    return (
        <div className={styles.myPage}>
            {postElement}
        </div>
    )
}

export default Posts;