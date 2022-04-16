import React from "react";
import styles from "./Posts.module.css"
import Post from "./Post/Post";
import {ActionType, PostDataType} from "../../../../../redux/my_store";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../redux/store";

export type PostsPropsType = {
    dispatch: (action: ActionType) => void
}

const Posts: React.FC<PostsPropsType> = (props) => {

    const postsData = useSelector<RootState, PostDataType>(state => state.postsData)

    const postElement = postsData.posts.map(post => <Post key={post.id} id={post.id} name={post.name}
                                                               date={post.date} text={post.text}
                                                               views={post.views} comments={post.comments}
                                                               like={post.like} dislike={post.dislike}
                                                               dispatch={props.dispatch}
    />)

    return (
        <div className={styles.myPage}>
            {postElement}
        </div>
    )
}

export default Posts;