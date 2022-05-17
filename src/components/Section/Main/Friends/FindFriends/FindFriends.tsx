import React, {useEffect} from "react";
import styles from "./FindFriends.module.css";
import {Friend} from "../Friend/Friend";
import {
    followingUserAC,
    getUsersTC,
    setCurrentPageAC,
    showMoreFoundUsersAC,
    toggleFollowingInProgressAC,
    unfollowingUserAC
} from "../../../../../redux/reducers/friendsReducer";
import {Preloader} from "../../../../UIKit/Preloader";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";
import {api} from "../../../../../api/api";
import {ShowMore} from "../../../../UIKit/ShowMore";

export const FindFriends = () => {

    const dispatch = useAppDispatch()

    const friendsFindData = useAppSelector(state => state.friendsData.foundFriends)
    const pageSize = useAppSelector(state => state.friendsData.pageSize)
    const totalFoundFriends = useAppSelector(state => state.friendsData.totalFoundFriends)
    const currentPageFoundFriends = useAppSelector(state => state.friendsData.currentPageFoundFriends)
    const isFetching = useAppSelector(state => state.friendsData.isFetching)
    const isFollowingInProgress = useAppSelector(state => state.friendsData.isFollowingInProgress)

        useEffect(() => {
            dispatch(getUsersTC(currentPageFoundFriends, pageSize))
    }, [pageSize, currentPageFoundFriends, totalFoundFriends])

    const changeFollowingUser = (id: string, followed: boolean) => {
        dispatch(toggleFollowingInProgressAC(id, true))
        if (!followed) {
            api.followingUser(id)
                .then(response => {
                    response.data.resultCode === 0 && dispatch(followingUserAC(id))
                    dispatch(toggleFollowingInProgressAC(id, false))
                })
        } else {
            api.unfollowingUser(id)
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
            {isFetching
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

