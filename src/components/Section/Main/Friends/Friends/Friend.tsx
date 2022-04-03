import React from "react";
import styles from "./Friends.module.css";

type FriendsPropsType = {
    id: number
    name: string
    profession: string
}

const Friend = (props: FriendsPropsType) => {
    return (
        <div className={styles.group}>
            <div>
                <a href="#">{props.name}</a>
                {props.profession}
            </div>
            <button className={styles.btn}>1</button>
            <button className={styles.btn}>2</button>
        </div>
    )
}

export default Friend;