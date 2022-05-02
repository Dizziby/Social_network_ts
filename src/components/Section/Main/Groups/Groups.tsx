import React from "react";
import styles from "./Groups.module.css";
import Group from "./Group/Group";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {GroupsDataType} from "../../../../redux/reducers/groupsReducer";

export const Groups = () => {

    const groupsData = useSelector<RootState, GroupsDataType>(state => state.groupsData)

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