import React, {useState} from "react";
import styles from "./Pagination.module.css"
import {setCurrentPageAC} from "../../../../../redux/reducers/friendsReducer";
import {useAppDispatch} from "../../../../../redux/hooks";
import {faCircleChevronLeft, faCircleChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type PaginationPropsType = {
    totalFoundFriends: number
    pageSize: number
    currentPageFindFriends: number
}

export const Pagination: React.FC<PaginationPropsType> = React.memo((props) => {
    console.log("Pagination")
    const dispatch = useAppDispatch()

    const onClickHandler = (currentPage: number) => {
        dispatch(setCurrentPageAC(currentPage))
    }

    const portionSize = 10

    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    let pagesCount = Math.ceil(props.totalFoundFriends / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.pagination}>
            <button onClick={() => setPortionNumber(portionNumber - 1)} disabled={portionNumber === 1}><FontAwesomeIcon className={styles.icon}
                                                                                         icon={faCircleChevronLeft}
                                                                                         size="2x"/></button>
            {pages.filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
                .map(el => <span
                    className={el === props.currentPageFindFriends ? `${styles.selectPage} ${styles.numberingPage}` : `${styles.numberingPage}`}
                    onClick={() => onClickHandler(el)}>{el}</span>)}
            <button onClick={() => setPortionNumber(portionNumber + 1)} disabled={portionNumber === Math.ceil(pagesCount/portionSize)}><FontAwesomeIcon className={styles.icon}
                                                                                         icon={faCircleChevronRight}
                                                                                         size="2x"/></button>
        </div>
    )
})

