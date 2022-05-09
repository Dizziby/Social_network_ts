import React from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import {useAppSelector} from "../../../../../redux/hooks";


const Posts = () => {

    const postsData = useAppSelector(state => state.postsData)

    const postElement = postsData.posts.map(post => <Post key={post.id} id={post.id} name={post.name}
                                                          date={post.date} text={post.text}
                                                          views={post.views} comments={post.comments}
                                                          like={post.like} dislike={post.dislike}
    />)

    return (
        <div className={styles.myPage}>
            {postElement}
        </div>
    )
}

export default Posts;