import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Nav.module.css";
import {SectionCSSType} from "../../../App";

type NavPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
}

const Nav = (props: NavPropsType) => {
    if(props.section === "sectionLogout") {
        return null;
    }

    return (
        <div className={styles.nav}>
            <p>Shortcuts</p>
            <div className={styles.link}>
                <NavLink to="/" onClick={() => props.changeGrid("sectionAll")}><i className="fa-solid fa-pager"> </i> My
                    Page</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/messages' onClick={() => props.changeGrid("sectionMessages")}><i
                    className="fa-solid fa-message"> </i> Messages</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/friends' onClick={() => props.changeGrid("sectionAll")}><i
                    className="fa-solid fa-person"> </i> Friends</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/groups' onClick={() => props.changeGrid("sectionAll")}><i
                    className="fa-solid fa-people-group"> </i> Groups</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/photos' onClick={() => props.changeGrid("sectionAll")}><i
                    className="fa-solid fa-image"> </i> Photos</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/videos' onClick={() => props.changeGrid("sectionAll")}><i
                    className="fa-solid fa-video"> </i> Videos</NavLink>
            </div>
            <div className={styles.link}>
                <NavLink to='/logout' onClick={() => props.changeGrid("sectionLogout")}><i
                    className="fa-solid fa-arrow-right-from-bracket"> </i> Logout</NavLink>
            </div>
        </div>
    )
}

export default Nav;