import React, {ChangeEvent} from "react";
import styles from "./Header.module.css"
import userAvatar from "../../img/user-avatar0.png"
import {faCameraRotate} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {updatePhotoProfileTC} from "../../redux/reducers/profileReducer";

type HeaderPropsType = {
    section: string
}

export const Header: React.FC<HeaderPropsType> = (props) => {

    const dispatch = useAppDispatch()

    const idAuth = useAppSelector(state => state.auth.id)
    const infoProfile = useAppSelector(state => state.profileData.profile)



    if (props.section === "sectionLogout" || props.section === "sectionError") {
        return null;
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            dispatch(updatePhotoProfileTC(e.target.files[0]))
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerInner}>
                    <a className={styles.userAvatar} href="#">
                        <img src={infoProfile?.photos.large ? infoProfile.photos.large : userAvatar}/>
                    </a>
                    {(idAuth === infoProfile?.userId) && <div className={styles.editPhoto}>
                        <input type="file" id="inputFile" onChange={onMainPhotoSelected}/>
                        <label htmlFor="inputFile"><FontAwesomeIcon icon={faCameraRotate} size="lg"/> Edit Photo</label>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}