import React from "react";
import styles from "./Groups.module.css";
import Group from "./Group/Group";
import {useAppSelector} from "../../../../redux/hooks";

export const Groups = () => {

    const groupsData = useAppSelector(state => state.groupsData)

    const groupElement = groupsData.map(group => <Group key={group.id} id={group.id} name={group.name} follow={group.follow} type={group.type} logo={group.logo}/>)

    return (
        <div className={styles.groups}>
            <div className={styles.title}>
                Joined Groups
            </div>
            {groupElement}
        </div>
    )
}