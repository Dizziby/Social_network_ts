import React, {useEffect} from "react";
import styles from "./FindFriends.module.css";
import {Friend} from "../Friend/Friend";
import {
    addFriendsAC, deleteFriendsAC,
    setCurrentPageAC,
    setFriendsAC,
    setTotalFoundFriendsAC,
    snowMoreFoundFriendsAC,
    toggleIsReceivedAC
} from "../../../../../redux/reducers/friendsReducer";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotateRight} from "@fortawesome/free-solid-svg-icons";
import {Preloader} from "../../../../UIKit/Preloader";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";
import {getFriends} from "../../../../../api/api";

type FriendsGetType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}

export const FindFriends = () => {

    const dispatch = useAppDispatch()

    const friendsFindData = useAppSelector(state => state.friendsData.foundFriends)
    const pageSize = useAppSelector(state => state.friendsData.pageSize)
    const totalFoundFriends = useAppSelector(state => state.friendsData.totalFoundFriends)
    const currentPageFoundFriends = useAppSelector(state => state.friendsData.currentPageFoundFriends)
    const isReceived = useAppSelector(state => state.friendsData.isReceived)

    console.log("Rendering findfriends")

    useEffect(() => {
        dispatch(toggleIsReceivedAC(true))
        getFriends(currentPageFoundFriends, pageSize).then(data => {
            const friends = data.items.map((el: any) => ({
                id: el.id,
                name: el.name,
                followed: el.followed,
                photos: el.photos.small === null ? el.name : el.photos.small,
                status: el.status === null ? "..." : el.status,
                email: `${el.name.replace(" ", "").toLowerCase()}@gmail.com`
            }))
            dispatch(toggleIsReceivedAC(false))
            dispatch(setFriendsAC(friends))
            dispatch(setTotalFoundFriendsAC(100))
        })
    }, [pageSize, currentPageFoundFriends, totalFoundFriends])

    const addFriends = (id: string, followed: boolean) => {
        if (!followed) {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
                withCredentials: true,
                headers: {
                    "API-KEY": "a85d113e-18ad-4422-b723-0a671fb9cb19"
                }
            })
                .then(response => {
                    response.data.resultCode === 0 && dispatch(addFriendsAC(id))
                })
        } else {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "a85d113e-18ad-4422-b723-0a671fb9cb19"
                }
            })
                .then(response => {
                    response.data.resultCode === 0 && dispatch(deleteFriendsAC(id))
                })
        }
    }

    //Pagination
    let pagesCount = Math.ceil(totalFoundFriends / pageSize)
    let pages = [];
    if (pagesCount < 20) {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    } else {
        for (let i = 1; i <= 20; i++) {
            pages.push(i)
        }
    }

    const friendsFindElement = friendsFindData.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}
                                                                     followed={friend.followed} photos={friend.photos}
                                                                     status={friend.status}
                                                                     callback={addFriends}/>)
    const onClickHandler = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    }

    const snowMoreFoundFriends = () => {
        dispatch(snowMoreFoundFriendsAC())
    }

    return (
        <div className={styles.findFriends}>
            {isReceived
                ? <Preloader/>
                :
                <div>
                    {friendsFindElement}
                    <div className={styles.btn} onClick={snowMoreFoundFriends}><FontAwesomeIcon className={styles.icon}
                                                                                                icon={faRotateRight}
                                                                                                size="lg"/></div>
                    <div className={styles.totalPages}>
                        Number of pages {pagesCount}
                    </div>
                    <div>
                        {pages.map(el => <span
                            className={el === currentPageFoundFriends ? `${styles.selectPage} ${styles.numberingPage}` : `${styles.numberingPage}`}
                            onClick={() => onClickHandler(el)}>{el}</span>)}
                    </div>
                </div>
            }
        </div>
    )
}

