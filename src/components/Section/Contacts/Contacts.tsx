import React from "react";
import Contact from "./Contact/Contact";
import styles from "./Contacts.module.css"
import {ContactsDataType} from "../../../redux/state";

type ContactsPropsType = {
    contactsData: ContactsDataType
}

const Contacts = (props: ContactsPropsType) => {

    const contactElement = props.contactsData.map(contact => <Contact key={contact.id} name={contact.name} email={contact.email}
                                                                avatar={contact.avatar} id={contact.id}/>)

    return (
        <div className={styles.contacts}>
            <div className={styles.title}>
                Friends
            </div>
            <div>
                <input className={styles.search} type="search" placeholder="  Search Contacts..." />
            </div>
            <div className={styles.contactElement}>
                {contactElement}
            </div>
        </div>
    )
}

export default Contacts;