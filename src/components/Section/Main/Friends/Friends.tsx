import React, {useState} from "react";
import styles from "./Friends.module.css";
import {NavLink, Route, Routes} from "react-router-dom";
import {MyFriends} from "./MyFriends/MyFriends";
import {FindFriends} from "./FindFriends/FindFriends";

export const Friends = () => {

    const [filter, setFilter] = useState(true)

    return (
        <div className={styles.friends}>
            <NavLink className={styles.titleItem} to="my" onClick={() => setFilter(true)}>My Friends</NavLink>
            <NavLink className={styles.titleItem} to="requests" onClick={() => setFilter(false)}>Friend
                Requests</NavLink>
            <NavLink className={styles.titleItem} to="find">Find Friends</NavLink>
            <Routes>
                <Route path="my" element={<MyFriends filter={filter}/>}/>
                <Route path="requests" element={<MyFriends filter={filter}/>}/>
                <Route path="find" element={<FindFriends/>}/>
            </Routes>
        </div>
    )
}