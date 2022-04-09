import React from "react";
import {Route, Routes} from "react-router-dom";
import styles from "./Main.module.css"
import Messages from "./Messages/Messages";
import Friends from "./Friends/Friends";
import Photos from "./Photos/Photos";
import Logout from "./Logout/Logout";
import MyPage from "./MyPage/MyPage";
import Videos from "./Videos/Videos";
import Groups from "./Groups/Groups";
import {ContactsDataType, MessagesDataType, PostDataType} from "../../../redux/state";

type MainPropsType = {
    section: string
    contactsData: ContactsDataType
    postData: PostDataType
    messagesData: MessagesDataType
    addPost: (newPostText: string) => void
}

const Main: React.FC<MainPropsType> = (props) => {
    if(props.section === "sectionLogout") {
        return null;
    }
    return (
        <div className={styles.main}>
                <Routes>
                    <Route path="/" element={<MyPage postData={props.postData} addPost={props.addPost}/>}/>
                    <Route path="/messages" element={<Messages contactsData={props.contactsData} messagesData={props.messagesData}/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/groups" element={<Groups/>}/>
                    <Route path="/photos" element={<Photos/>}/>
                    <Route path="/videos" element={<Videos/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                </Routes>
        </div>
    )
}

export default Main;