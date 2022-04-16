import React from "react";
import styles from "./MyPage.module.css"
import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";
import {ActionType, PostDataType} from "../../../../redux/my_store";

type MyPagePropsType = {
    postsData: PostDataType
    dispatch: (action: ActionType) => void
}

const MyPage: React.FC<MyPagePropsType> = (props) => {
    return (
        <div className={styles.myPage}>
            <AddPost newPostText={props.postsData.newPostText}  dispatch={props.dispatch}/>
            <Posts postsData={props.postsData} dispatch={props.dispatch}/>
        </div>
    )
}

export default MyPage;