import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import styles from "./ProfileStatus.module.css"
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";
import {getStatusProfileTC, updateStatusProfileTC} from "../../../../../redux/reducers/profileReducer";
import {useParams} from "react-router-dom";

export const ProfileStatus = () => {
    const dispatch = useAppDispatch()

    const idAuth = useAppSelector(state => state.auth.id)
    const profileId = useAppSelector(state => state.profileData.profile?.userId)

    let params = useParams<"*">();
    let id: number = Number(params["*"])
    if (params["*"] === "") {
        id = idAuth
    }

    useEffect(() => {
        dispatch(getStatusProfileTC(id))
    }, [])

    const status = useAppSelector(state => state.profileData.status)

    const [localStatus, setLocalStatus] = useState<string>(status)
    const [edit, setEdit] = useState(false)

     const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            updateStatus()
        }
    }

    const onBlurStatusHandler = () => {
        updateStatus()
    }

    const updateStatus = () => {
        if (localStatus === "") {
            dispatch(updateStatusProfileTC("set status"))
            setEdit(!edit)
        }  else {
            dispatch(updateStatusProfileTC(localStatus))
            setEdit(!edit)
        }
    }

    const onClickHandler = () => {
        if(idAuth === profileId) {
            dispatch(getStatusProfileTC(id))
            setEdit(!edit)
        }
    }

    return (
        <div className={styles.profileStatus}>
            {edit
                ? <input placeholder={"set status"} value={localStatus} onBlur={onBlurStatusHandler}
                         onChange={onChangeStatus}
                         onKeyPress={onKeyPressHandler} autoFocus/>
                : <span onClick={onClickHandler}>{status.length > 15 ? `${status.slice(0, 15)}...` : status}</span>
            }
        </div>
    );
};