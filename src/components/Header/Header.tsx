import React from "react";
import styles from "./Header.module.css"
import userAvatar from "../../img/user-avatar.jpg"

type HeaderPropsType = {
    section: string
}


const Header: React.FC<HeaderPropsType> = (props) => {
    if(props.section === "sectionLogout") {
        return null;
    }

    return (
        <div className={styles.header}>
            <a href="#" >
                <img className={styles.userAvatar} src={userAvatar}/>
            </a>
            <button>Edit Cover Photo</button>
        </div>
    )
}

export default Header;