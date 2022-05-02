import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    name: string
    status?: boolean
    callback: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {

    const btnClass = props.status ? `${styles.btn} ${styles.grey}` : `${styles.btn} ${styles.blue}`

    return <button className={btnClass} onClick={()=>props.callback()}>{props.name}</button>
}