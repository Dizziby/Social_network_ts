import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./AddMessageForm.module.css"

type AddMessageFormPropsType = {
    callback: (message: string) => void
}
type FormInputs = {
    newMessage: string;
};

export const AddMessageForm: React.FC<AddMessageFormPropsType> = (props) => {

    const {register, handleSubmit, reset} = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        props.callback(data.newMessage)
        reset()
    };


    return (
        <form className={styles.addMessageForm} onSubmit={handleSubmit(onSubmit)}>
            <input className={styles.formInput} type="text" {...register("newMessage", {required: true})} placeholder="Write a message..."/>
            <button className={styles.formBtn}><FontAwesomeIcon icon={faPaperPlane} size="lg"/></button>
        </form>
    )
}