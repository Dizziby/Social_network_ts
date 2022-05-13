import React, {useEffect} from "react";
import styles from "./Header.module.css"
import userAvatar from "../../img/user-avatar.jpg"
import {NavLink} from "react-router-dom";
import {SectionCSSType} from "../../App";
import axios from "axios";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {setUserDataAC} from "../../redux/reducers/authReducer";
import {faDoorOpen, faDoorClosed} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type HeaderPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
}

export const Header: React.FC<HeaderPropsType> = (props) => {

    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const login = useAppSelector(state => state.auth.login)

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true

        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAC(response.data.data))
                }
            })
    }, [])

    if (props.section === "sectionLogout" || props.section === "sectionError") {
        return null;
    }

    return (
        <div className={styles.header}>
            <a href="#">
                <img className={styles.userAvatar} src={userAvatar}/>
            </a>
            <button>Edit Cover Photo</button>

            <div className={styles.auth}>
                {isAuth
                    ? <NavLink to='logout' className={styles.navLink}
                               onClick={() => props.changeGrid("sectionLogout")}>{login}<FontAwesomeIcon
                        icon={faDoorOpen} size="lg" pull="right"/></NavLink>
                    : <NavLink to='logout' onClick={() => props.changeGrid("sectionLogout")}><FontAwesomeIcon
                        icon={faDoorClosed} size="lg" pull="right"/></NavLink>


                }

            </div>

        </div>
    )
}