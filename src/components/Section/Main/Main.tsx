import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import styles from "./Main.module.css"
import {Messages} from "./Messages/Messages";
import {Friends} from "./Friends/Friends";
import {Photos} from "./Photos/Photos";
import {Logout} from "./Logout/Logout";
import {Profile} from "./MyPage/Profile";
import {Videos} from "./Videos/Videos";
import {Groups} from "./Groups/Groups";
import {SectionCSSType} from "../../../App";
import {Error} from "../../Error";
import {useAppSelector} from "../../../redux/hooks";

type MainPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
}

export const Main: React.FC<MainPropsType> = (props) => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (props.section === "sectionLogout") {
        return null
    }

    //----authorization check
    if(!isAuth) {
        props.changeGrid("sectionLogout")
        return <Navigate to="logout"/>
    }

    return (
        <div className={styles.main}>
            <Routes>
                <Route path="*" element={<Error/> }/>
                {/*<Route path="React-Social-Network-TS" element={<Profile/>}/>*/}
                {/*<Route path="/" element={<Profile/>}/>*/}
                <Route path="profile/*" element={<Profile/>}/>
                <Route path="messages" element={<Messages/>}/>
                <Route path="friends/*" element={<Friends/>}/>
                <Route path="groups" element={<Groups/>}/>
                <Route path="photos" element={<Photos/>}/>
                <Route path="videos" element={<Videos/>}/>
                <Route path="logout" element={<Logout changeGrid={props.changeGrid}/>}/>
            </Routes>
        </div>
    )
}