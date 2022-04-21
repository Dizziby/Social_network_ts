import React, {ChangeEvent} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../redux/store";
import {addMessageAC, updateMessageTextAC} from "../../../../../redux/reducers/messagesReducer";
import styles from "./AddMessage.module.css"

const AddMessage = () => {
    console.log("AddMessage rendering")
    const dispatch = useDispatch()
    const newMessageText = useSelector<RootState, string>(state => state.messagesData.newMessageText)

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

export default AddMessage;