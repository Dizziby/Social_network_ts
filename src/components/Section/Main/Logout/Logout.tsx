import React, {MouseEvent} from "react";
import styles from "./Logout.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import {SectionCSSType} from "../../../../App";

type LogoutPropsType = {
    changeGrid: (value: SectionCSSType) => void
}

const Logout: React.FC<LogoutPropsType> = (props) => {

    const loginProfile = (e: MouseEvent<HTMLAnchorElement>) => {
        props.changeGrid("sectionAll")
    }

    return (
        <div className={styles.logout}>
            <textarea>Login</textarea>
            <button ><NavLink to='/' onClick={loginProfile}>Login</NavLink></button>
            <button ><NavLink to='/' onClick={loginProfile}>Register</NavLink></button>
        </div>
    )
}

export default Logout;