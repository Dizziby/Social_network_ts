import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Nav.module.css";
import {
    faPager,
    faMessage,
    faPerson,
    faPeopleGroup,
    faImage,
    faVideo,
    faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {SectionCSSType} from "../../../App";


type NavPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
}

const Nav = (props: NavPropsType) => {
    if (props.section === "sectionLogout") {
        return null;
    }

    return (
        <div className={styles.nav}>
            <p className={styles.title}>Shortcuts</p>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faPager} size="lg" pull="left"/>
                <NavLink to="/" onClick={() => props.changeGrid("sectionAll")}>My Page</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faMessage} size="lg" pull="left"/>
                <NavLink to='/messages' onClick={() => props.changeGrid("sectionMessages")}>Messages</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faPerson} size="lg" pull="left"/>
                <NavLink to='/friends' onClick={() => props.changeGrid("sectionAll")}>Friends</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faPeopleGroup} size="lg" pull="left"/>
                <NavLink to='/groups' onClick={() => props.changeGrid("sectionAll")}>Groups</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faImage} size="lg" pull="left"/>
                <NavLink to='/photos' onClick={() => props.changeGrid("sectionAll")}>Photos</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faVideo} size="lg" pull="left"/>
                <NavLink to='/videos' onClick={() => props.changeGrid("sectionAll")}>Videos</NavLink>
            </div>
            <div className={styles.link}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} size="lg" pull="left"/>
                <NavLink to='/logout' onClick={() => props.changeGrid("sectionLogout")}>Logout</NavLink>
            </div>
        </div>
    )
}

export default Nav;