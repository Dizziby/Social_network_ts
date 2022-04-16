import React from "react";
import styles from "./MyPage.module.css"
import AddPost from "./AddPost/AddPost";
import Posts from "./Posts/Posts";
import {ActionType} from "../../../../redux/my_store";

type MyPagePropsType = {
    dispatch: (action: ActionType) => void
}

const MyPage: React.FC<MyPagePropsType> = (props) => {
    return (
        <div className={styles.myPage}>
            <AddPost dispatch={props.dispatch}/>
            <Posts dispatch={props.dispatch}/>
        </div>
    )
}

export default MyPage;