import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type AddMessageFormPropsType = {
    callback: (message: string) => void
}
type FormInputs = {
    newMessage: string;
};

export const AddMessageForm: React.FC<AddMessageFormPropsType> = (props) => {

    const {register, handleSubmit, watch} = useForm<FormInputs>();
    const onSubmit: SubmitHandler<FormInputs> = (data) => props.callback(data.newMessage);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("newMessage", {required: true})} placeholder="Write a message..."/>
            <button><FontAwesomeIcon icon={faPaperPlane} size="lg"/></button>
        </form>
    )
}