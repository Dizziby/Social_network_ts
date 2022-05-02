import React from "react";
import styles from "./Messages.module.css"
import {Contact} from "../../Contacts/Contact/Contact";
import {Message} from "./Message/Message";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {ContactsDataType} from "../../../../redux/reducers/contactsReducer";
import {AddMessage} from "./AddMessage/AddMessage";

export const Messages = () => {

    const contactsData = useSelector<RootState, ContactsDataType>(state => state.contactsData)

    const contactElement = contactsData.map(contact => <Contact key={contact.id} name={contact.name}
                                                                email={contact.email}
                                                                avatar={contact.avatar} id={contact.id}/>)
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