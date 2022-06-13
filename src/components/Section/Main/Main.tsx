import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import styles from "./Main.module.css"
import {Messages} from "./Messages/Messages";
import {Friends} from "./Friends/Friends";
import {Logout} from "./Logout/Logout";
import {Profile} from "./MyPage/Profile";
import {Groups} from "./Groups/Groups";
import {SectionCSSType} from "../../../App";
import {Error} from "../../Error";
import {useAppSelector} from "../../../redux/hooks";

const Photos = React.lazy(() => import('./Photos/Photos'));
const Videos = React.lazy(() => import('./Videos/Videos'));

type MainPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
}

export const Main: React.FC<MainPropsType> = React.memo((props) => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (props.section === "sectionLogout" ) {
        return null
    }

    //----authorization check
    if (!isAuth) {
        props.changeGrid("sectionLogout")
        return <Navigate to="logout"/>
    }

    return (
        <div className={styles.main}>
            <Routes>
                <Route path="*" element={<Error/>}/>
                <Route path="/" element={<Profile/>}/>
                <Route path="profile/*" element={<Profile/>}/>
                <Route path="messages" element={<Messages/>}/>
                <Route path="friends/*" element={<Friends/>}/>
                <Route path="groups" element={<Groups/>}/>
                <Route path="photos" element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Photos/>
                    </React.Suspense>
                }/>
                <Route path="videos" element={
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Videos/>
                    </React.Suspense>
                }/>
                <Route path="logout" element={<Logout changeGrid={props.changeGrid}/>}/>
            </Routes>
        </div>
    )
})