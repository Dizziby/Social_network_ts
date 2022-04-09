import React from "react";
import styles from "./MyPage.module.css"
import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";
import {PostDataType} from "../../../../redux/state";

type MyPagePropsType = {
    postData: PostDataType
    addPost: (newPostText: string) => void
    updatePostText: (postText: string) => void
    deletePost: (id: string) => void
}

const MyPage: React.FC<MyPagePropsType> = (props) => {
    return (
        <div className={styles.myPage}>
            <AddPost addPost={props.addPost} newPostText={props.postData.newPostText} updatePostText={props.updatePostText}/>
            <Posts postData={props.postData} deletePost={props.deletePost}/>
        </div>
    )
}

export default MyPage;