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

type mainPropsType = {
    section: string
}


const Main = (props: mainPropsType) => {
    return (
        <div className={styles.main}>
                <Routes>
                    <Route path="/" element={<MyPage/>}/>
                    <Route path="/messages" element={<Messages/>}/>
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