import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import styles from "./ProfileStatus.module.css"
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getStatusProfileTC, updateStatusProfileTC} from "../../redux/reducers/profileReducer";
import {useParams} from "react-router-dom";

export const ProfileStatus = () => {
    const dispatch = useAppDispatch()

    let {"*": id} = useParams<"*">();

    if (id === "") {
        id = "23909"
    }

    useEffect(() => {
        console.log("1111")
        id && dispatch(getStatusProfileTC(id))
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
        id && dispatch(getStatusProfileTC(id))

        setEdit(!edit)
    }

    return (
        <div className={styles.profileStatus}>
            {edit
                ? <input placeholder={"set status"} value={localStatus} onBlur={onBlurStatusHandler}
                         onChange={onChangeStatus}
                         onKeyPress={onKeyPressHandler} autoFocus/>
                : <span onClick={onClickHandler}>{status}</span>
            }
        </div>
    );
};