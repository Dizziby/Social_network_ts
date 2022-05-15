import React, {useEffect} from "react";
import styles from "./FindFriends.module.css";
import {Friend} from "../Friend/Friend";
import {
    followingUserAC,
    setCurrentPageAC,
    setTotalFoundFriendsAC,
    setUsersAC,
    showMoreFoundUsersAC,
    toggleFollowingInProgressAC,
    toggleIsReceivedAC,
    unfollowingUserAC
} from "../../../../../redux/reducers/friendsReducer";
import {Preloader} from "../../../../UIKit/Preloader";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";
import {followingUser, getUsers, unfollowingUser} from "../../../../../api/api";
import {ShowMore} from "../../../../UIKit/ShowMore";

// type FriendsGetType = {
//     name: string
//     id: number
//     uniqueUrlName: string
//     photos: {
//         small: string
//         large: string
//     }
//     status: string
//     followed: boolean
// }

export const FindFriends = () => {

    const dispatch = useAppDispatch()

    const friendsFindData = useAppSelector(state => state.friendsData.foundFriends)
    const pageSize = useAppSelector(state => state.friendsData.pageSize)
    const totalFoundFriends = useAppSelector(state => state.friendsData.totalFoundFriends)
    const currentPageFoundFriends = useAppSelector(state => state.friendsData.currentPageFoundFriends)
    const isReceived = useAppSelector(state => state.friendsData.isReceived)
    const isFollowingInProgress = useAppSelector(state => state.friendsData.isFollowingInProgress)

    useEffect(() => {
        dispatch(toggleIsReceivedAC(true))
        getUsers(currentPageFoundFriends, pageSize).then(data => {
            const friends = data.items.map((el: any) => ({
                id: el.id,
                name: el.name,
                followed: el.followed,
                photos: el.photos.small === null ? el.name : el.photos.small,
                status: el.status === null ? "..." : el.status,
                email: `${el.name.replace(" ", "").toLowerCase()}@gmail.com`
            }))
            dispatch(toggleIsReceivedAC(false))
            dispatch(setUsersAC(friends))
            dispatch(setTotalFoundFriendsAC(100))
        })
    }, [pageSize, currentPageFoundFriends, totalFoundFriends])

    const changeFollowingUser = (id: string, followed: boolean) => {
        dispatch(toggleFollowingInProgressAC(id, true))
        if (!followed) {
            followingUser(id)
                .then(response => {
                    response.data.resultCode === 0 && dispatch(followingUserAC(id))
                    dispatch(toggleFollowingInProgressAC(id, false))
                })
        } else {
            unfollowingUser(id)
                .then(response => {
                    response.data.resultCode === 0 && dispatch(unfollowingUserAC(id))
                    dispatch(toggleFollowingInProgressAC(id, false))
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
                                                                     callback={changeFollowingUser}
                                                                     disabled={isFollowingInProgress.some(id => id === friend.id)}/>)
    const onClickHandler = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    }

    const showMoreFoundUsers = () => {
        dispatch(showMoreFoundUsersAC())
    }

    return (
        <div className={styles.findFriends}>
            {isReceived
                ? <Preloader/>
                :
                <div>
                    {friendsFindElement}
                    <ShowMore callback={showMoreFoundUsers}/>
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

