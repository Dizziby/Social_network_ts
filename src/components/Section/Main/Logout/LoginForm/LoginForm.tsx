import React from "react";
import styles from "./LoginForm.module.css"
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "../../../../../redux/hooks";
import {loginTC} from "../../../../../redux/reducers/authReducer";
import {Button} from "../../../../UIKit/Button";

type Inputs = {
    email: string,
    password: string,
    rememberMe: false
};

export const LoginForm = () => {
    const dispatch = useAppDispatch()

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => dispatch(loginTC(data.email, data.password, data.rememberMe));

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h3 className={styles.title}>Login</h3>
                <input className={styles.formInput} placeholder={"Email"} defaultValue="" {...register("email", {required: true})} />
                {errors.email && <span className={styles.error}>This field is required</span>}
                <input className={styles.formInput} placeholder={"Password"} type={"password"} defaultValue="" {...register("password", {required: true})} />
                {errors.password && <span className={styles.error}>This field is required</span>}
                <input className={styles.formCheckbox} type="checkbox" {...register("rememberMe")}/><span>Remember Me</span>
                <button className={styles.formBtn}>Login</button>
            </div>
        </form>
    )
}
