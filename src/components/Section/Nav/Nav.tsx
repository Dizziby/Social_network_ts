import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Nav.module.css";

type navPropsType = {
    section: string
    changeGridSection: (value: boolean) => void
}

const Nav = (props: navPropsType) => {
    return (
        <div className={styles.nav}>
            <p>Shortcuts</p>
            <div className={styles.link}>
                <NavLink to="/" onClick={() => props.changeGridSection(false)}><i className="fa-solid fa-pager"></i> My
                    Page</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/messages' onClick={() => props.changeGridSection(true)}><i
                    className="fa-solid fa-message"></i> Messages</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/friends' onClick={() => props.changeGridSection(false)}><i
                    className="fa-solid fa-person"></i> Friends</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/groups' onClick={() => props.changeGridSection(false)}><i
                    className="fa-solid fa-people-group"></i> Groups</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/photos' onClick={() => props.changeGridSection(false)}><i
                    className="fa-solid fa-image"></i> Photos</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/videos' onClick={() => props.changeGridSection(false)}><i
                    className="fa-solid fa-video"></i> Videos</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/logout' onClick={() => props.changeGridSection(false)}><i
                    className="fa-solid fa-arrow-right-from-bracket"></i> Logout</NavLink>
            </div>
        </div>
    )
}

export default Nav;