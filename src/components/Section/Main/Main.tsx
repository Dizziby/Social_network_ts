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
import {ActionType} from "../../../redux/my_store";
import {SectionCSSType} from "../../../App";

type MainPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
    dispatch: (action: ActionType) => void
}

const Main: React.FC<MainPropsType> = (props) => {
    if (props.section === "sectionLogout") {
        return null;
    }
    return (
        <div className={styles.main}>
            <Routes>
                <Route path="/" element={<MyPage dispatch={props.dispatch}/>}/>
                <Route path="/messages"
                       element={<Messages />}/>
                <Route path="/friends" element={<Friends/>}/>
                <Route path="/groups" element={<Groups/>}/>
                <Route path="/photos" element={<Photos/>}/>
                <Route path="/videos" element={<Videos/>}/>
                <Route path="/logout" element={<Logout changeGrid={props.changeGrid}/>}/>
            </Routes>
        </div>
    )
}

export default Main;