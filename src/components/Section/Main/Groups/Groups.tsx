import React from "react";
import styles from "./Groups.module.css";
import Group from "./Group/Group";

const Groups = () => {

    const groupsData = [
        {name: "Funparty", follow: 32, type: "Public", logo: "group1"},
        {name: "ABC News", follow: 5, type: "Private", logo: "group2"},
        {name: "SEO Zone", follow: 32, type: "Public", logo: "group3"},
        {name: "Max Us", follow: 7, type: "Public", logo: "group4"},
        {name: "Banana Friend", follow: 756, type: "Friends", logo: "group5"},
        {name: "Bad Boys N Girls", follow: 32, type: "Public", logo: "group6"},
        {name: "Bachelor's Fun", follow: 50, type: "Public", logo: "group7"}
    ]

    const groupElement = groupsData.map(group => <Group name={group.name} follow={group.follow} type={group.type} logo={group.logo}/>)

    return (
        <div className={styles.groups}>
            <div className={styles.title}>
                joined Groups
            </div>
            {groupElement}
        </div>
    )
}

export default Groups;