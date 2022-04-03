import React from "react";
import styles from "../Groups/Groups.module.css";
import Friend from "./Friends/Friend";


const Friends = () => {
    const friendsData = [
        {id: 1, name: "Jhon Kates", profession: "Ftv Model"},
        {id: 2, name: "Sophia Gate", profession: "Tv Actresses"},
        {id: 3, name: "Sara Grey", profession: "Work At IBM"},
        {id: 4, name: "Sexy Cat", profession: "Student"},
        {id: 5, name: "Sara Grey", profession: "Ftv Model"},
        {id: 6, name: "Amy Watson", profession: "Study In University"},

    ]

    const friendElement = friendsData.map(friend => <Friend id={friend.id} name={friend.name} profession={friend.profession}/>)

    return (
        <div className={styles.friends}>
            <div className={styles.title}>
                My Friends
            </div>
            {friendElement}
        </div>
    )
}

export default Friends;