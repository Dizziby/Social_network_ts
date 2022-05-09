import React, {useState} from "react";
import styles from "./Friends.module.css";
import {NavLink, Route, Routes} from "react-router-dom";
import {MyFriends} from "./MyFriends/MyFriends";
import {FindFriends} from "./FindFriends/FindFriends";

export const Friends = () => {

    const [filter, setFilter] = useState(true)

    return (
        <div className={styles.friends}>
            <div className={styles.title}>
                <NavLink className={({isActive}) =>
                    (isActive ? `${styles.titleItem} ${styles.activeItem}` : `${styles.titleItem}`)} to="my"
                         onClick={() => setFilter(true)}>My Friends</NavLink>
                <NavLink className={({isActive}) =>
                    (isActive ? `${styles.titleItem} ${styles.activeItem}` : `${styles.titleItem}`)} to="requests"
                         onClick={() => setFilter(false)}>Friend
                    Requests</NavLink>
                <NavLink className={({isActive}) =>
                    (isActive ? `${styles.titleItem} ${styles.activeItem}` : `${styles.titleItem}`)} to="find">Find
                    Friends</NavLink>
            </div>
            <Routes>
                <Route path="my" element={<MyFriends filter={filter}/>}/>
                <Route path="requests" element={<MyFriends filter={filter}/>}/>
                <Route path="find" element={<FindFriends/>}/>
            </Routes>
        </div>
    )
}