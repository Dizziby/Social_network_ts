import React from 'react';
import styles from "./ShowMore.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotateRight} from "@fortawesome/free-solid-svg-icons";

type ShowMoreType = {
    callback: () => void
}

export const ShowMore: React.FC<ShowMoreType> = (props) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <div>
            <div className={styles.btn} onClick={onClickHandler}><FontAwesomeIcon className={styles.icon}
                                                                                  icon={faRotateRight}
                                                                                  size="lg"/></div>
        </div>
    );
};
