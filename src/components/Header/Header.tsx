import React, {useEffect} from "react";
import styles from "./Header.module.css"
import userAvatar from "../../img/user-avatar.jpg"
import {SectionCSSType} from "../../App";
import {useAppDispatch} from "../../redux/hooks";
import {getAuthUserDataTC} from "../../redux/reducers/authReducer";

type HeaderPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
}

export const Header: React.FC<HeaderPropsType> = (props) => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAuthUserDataTC())
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

        </div>
    )
}