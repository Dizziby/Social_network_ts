import React from "react";
import styles from "./Header.module.css"
import userAvatar from "../../img/user-avatar.jpg"

const Header = () => {
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