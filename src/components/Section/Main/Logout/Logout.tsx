import React, {MouseEvent} from "react";
import styles from "./Logout.module.css"
import {SectionType} from "../../../../App";

type LogoutPropsType = {
    changeGrid: (value: SectionType) => void
}

const Logout: React.FC<LogoutPropsType> = (props) => {

    const loginProfile = (e: MouseEvent<HTMLButtonElement>) => {
        props.changeGrid("all")
    }

    return (
        <div className={styles.logout}>
            <textarea>Login</textarea>
            <button onClick={loginProfile}>Login</button>
        </div>
    )
}

export default Logout;