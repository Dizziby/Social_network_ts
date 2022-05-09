import React, {ChangeEvent} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {addMessageAC, updateMessageTextAC} from "../../../../../redux/reducers/messagesReducer";
import styles from "./AddMessage.module.css"
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";

export const AddMessage = () => {

    const dispatch = useAppDispatch()

    const newMessageText = useAppSelector(state => state.messagesData.newMessageText)

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateMessageTextAC(e.currentTarget.value))
    }

    const onClickButtonHandler = () => {
        if (newMessageText.trim()) {
            dispatch(addMessageAC())
        }
    }

    return (
        <div className={styles.addMessage}>
            <input value={newMessageText} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}><FontAwesomeIcon icon={faPaperPlane} size="lg"/></button>
        </div>
    )
};