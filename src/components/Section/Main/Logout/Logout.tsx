import React, {MouseEvent} from "react";
import styles from "./Logout.module.css"
import {SectionCSSType} from "../../../../App";

type LogoutPropsType = {
    changeGrid: (value: SectionCSSType) => void
}

const Logout: React.FC<LogoutPropsType> = (props) => {

    const loginProfile = (e: MouseEvent<HTMLButtonElement>) => {
        props.changeGrid("sectionAll")
    }

    return (
        <div className={styles.logout}>
            <textarea>Login</textarea>
            <button onClick={loginProfile}>Login</button>
        </div>
    )
}

export default Logout;