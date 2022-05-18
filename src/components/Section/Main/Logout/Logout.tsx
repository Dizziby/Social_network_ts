import React, {MouseEvent} from "react";
import styles from "./Logout.module.css"
import {NavLink} from "react-router-dom";
import {SectionCSSType} from "../../../../App";
import logo from "../../../../img/other/dizzi.png";


type LogoutPropsType = {
    changeGrid: (value: SectionCSSType) => void
}

export const Logout: React.FC<LogoutPropsType> = (props) => {

    const loginProfile = (e: MouseEvent<HTMLAnchorElement>) => {
        props.changeGrid("sectionAll")
    }

    return (
        <div className={styles.logout}>
            <div className={styles.left}>
                Hello
                <img
                    src={logo}
                    alt="Dizzi_by"/>
            </div>
            <div className={styles.right}>
                <div className={styles.form}>
                    <textarea>Login</textarea>
                    <button ><NavLink to='/' onClick={loginProfile}>Login</NavLink></button>
                    <button ><NavLink to='/' onClick={loginProfile}>Register</NavLink></button>
                </div>
            </div>
        </div>
    )
}