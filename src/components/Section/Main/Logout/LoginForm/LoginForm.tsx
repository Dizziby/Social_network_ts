import React from "react";
import styles from "./LoginForm.module.css"
import {SubmitHandler, useForm} from "react-hook-form";
import {connect} from "react-redux";
import {useAppDispatch} from "../../../../../redux/hooks";

type Inputs = {
    login: string,
    password: string,
};

export const LoginForm = () => {
    console.log("LoginForm")
    const dispatch = useAppDispatch()

    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    //const onSubmit = data => props.updateAction(data);
    //const onSubmit = data => dispatch (updateAction(data));

    return (
        <div className={styles.right}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input placeholder={"login"} defaultValue="" {...register("login")} />
                </div>
                <div>
                    <input placeholder={"password"} defaultValue="" {...register("password", {required: true})} />
                </div>
                <div>
                    {errors.password && <span>This field is required</span>}
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
    )
}


//connect(({ login, password }) => ({ login, password }), updateAction)(YourForm);