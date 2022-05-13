import React, {useEffect} from "react";
import styles from "./ProfileInfo.module.css"
import axios from "axios";
import userAvatar from "../../../../../img/user-avatar.jpg";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";
import {setProfileAC} from "../../../../../redux/reducers/profileReducer";
import {useParams} from "react-router-dom";

export const ProfileInfo = () => {

    const dispatch = useAppDispatch()

    const infoProfile =  useAppSelector(state => state.profileData.profile)
    let { id } = useParams<"id">();

    useEffect(() => {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                dispatch(setProfileAC(response.data))
            })
    }, [])

    return (
        <div className={styles.profileInfo}>
            <div>
                <img className={styles.userAvatar} src={userAvatar}/>
            </div>
            <div>
                <p><b>Name:</b> {infoProfile?.fullName}</p>
                <p><b>About me:</b> {infoProfile?.aboutMe
                    ? infoProfile?.aboutMe
                    : "..."
                } </p>
                <p><b>Job:</b> {infoProfile?.lookingForAJobDescription
                    ? infoProfile?.lookingForAJobDescription
                    : "No work"
                } </p>
                <hr/>
                <p><b>Contacts</b></p>
                <hr/>
                <p><b>facebook:</b> {infoProfile?.contacts.facebook
                    ? infoProfile?.contacts.facebook
                    : "facebook.com"
                } </p>
                <p><b>vk:</b> {infoProfile?.contacts.vk
                    ? infoProfile?.contacts.vk
                    : "vk.com"
                } </p>
                <p><b>twitter:</b> {infoProfile?.contacts.twitter
                    ? infoProfile?.contacts.twitter
                    : "twitter.com"
                } </p>
                <p><b>instagram:</b> {infoProfile?.contacts.instagram
                    ? infoProfile?.contacts.instagram
                    : "instagram.com"
                } </p>
                <p><b>github:</b> {infoProfile?.contacts.github
                    ? infoProfile?.contacts.github
                    : "github.com"
                } </p>
            </div>
        </div>
    )
}
