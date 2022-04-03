import React from "react";
import styles from "./Group.module.css";
import group1 from "../../../../../img/Groups/group1.jpg"

type GroupPropsType = {
    name: string
    follow: number
    type: string
    logo: string
}

const Group = (props: GroupPropsType) => {
    return (
        <div className={styles.group}>
            <a href="#"><img src={group1} alt={props.logo}/></a>
            <div>
                <a>{props.name}</a>
                <p>{props.type} Group</p>
            </div>
            <div>{props.follow}k Members</div>
            <button className={styles.btn}>Leave Group</button>
        </div>
    )
}

export default Group;