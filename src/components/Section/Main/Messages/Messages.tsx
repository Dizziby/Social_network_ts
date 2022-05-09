import React from "react";
import styles from "./Messages.module.css"
import {Contact} from "../../Contacts/Contact/Contact";
import {Message} from "./Message/Message";
import {AddMessage} from "./AddMessage/AddMessage";
import {useAppSelector} from "../../../../redux/hooks";

export const Messages = () => {

    const friendsData = useAppSelector(state => state.friendsData.friends)

    let friendsDataFilter = friendsData.filter(el => el.followed);


    const contactElement = friendsDataFilter.map(contact => <Contact key={contact.id} name={contact.name}
                                                                email={contact.email}
                                                                photos={contact.photos} id={contact.id}/>)
    return (
        <div className={styles.messages}>
            <div className={styles.title}>All Messages</div>
            <div className={styles.content}>
                <div>
                    <div className={styles.contactElement}>
                        {contactElement}
                    </div>
                </div>
                <div className={styles.main}>
                    <Message />
                    <AddMessage/>
                </div>
            </div>
        </div>
    )
}