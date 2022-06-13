import React, {useEffect} from "react";
import styles from "./FindFriends.module.css";
import {Friend} from "../Friend/Friend";
import {
    followingUserTC,
    getUsersTC,
    showMoreFoundUsersAC,
    toggleFollowingInProgressAC,
    unfollowingUserTC
} from "../../../../../redux/reducers/friendsReducer";
import {Preloader} from "../../../../UIKit/Preloader";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";
import {ShowMore} from "../../../../UIKit/ShowMore";
import {Pagination} from "./Pagination";

export const FindFriends = () => {

    const dispatch = useAppDispatch()

    const friendsFindData = useAppSelector(state => state.friendsData.foundFriends)
    const pageSize = useAppSelector(state => state.friendsData.pageSize)
    const totalFoundFriends = useAppSelector(state => state.friendsData.totalFoundFriends)
    const currentPageFindFriends = useAppSelector(state => state.friendsData.currentPageFindFriends)
    const isFetching = useAppSelector(state => state.friendsData.isFetching)
    const isFollowingInProgress = useAppSelector(state => state.friendsData.isFollowingInProgress)

    useEffect(() => {
        dispatch(getUsersTC(currentPageFindFriends, pageSize))
    }, [pageSize, currentPageFindFriends, totalFoundFriends])

    const changeFollowingUser = (id: string, followed: boolean) => {
        dispatch(toggleFollowingInProgressAC(id, true))
        if (!followed) {
            dispatch(followingUserTC(id))
        } else {
            dispatch(unfollowingUserTC(id))
        }
    }

    const friendsFindElement = friendsFindData.map(friend => <Friend key={friend.id} id={friend.id} name={friend.name}
                                                                     followed={friend.followed} photos={friend.photos}
                                                                     status={friend.status}
                                                                     callback={changeFollowingUser}
                                                                     disabled={isFollowingInProgress.some(id => id === friend.id)}/>)

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
                    <Pagination totalFoundFriends={totalFoundFriends} pageSize={pageSize}
                                currentPageFindFriends={currentPageFindFriends}/>
                </div>
            }
        </div>
    )
}

