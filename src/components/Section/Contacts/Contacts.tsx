import React from "react";
import Contact from "./Contact/Contact";
import styles from "./Contacts.module.css"

const Contacts = () => {

    const contactsData = [
        {id: 1, name: 'Bucky Bames', email: 'wintersolder@gmail.com', avatar: "friendAvatar"},
        {id: 2, name: 'Sarah Lorender', email: 'barnes@gmail.com', avatar: "friendAvatar2"},
        {id: 3, name: 'Jason Borne', email: 'jasonb@gmail.com', avatar: "friendAvatar3"},
        {id: 4, name: 'Cameron Diaz', email: 'jasonb@gmail.com', avatar: "friendAvatar4"},
        {id: 5, name: 'Daniel Warber', email: 'jasonb@gmail.com', avatar: "friendAvatar5"},
        {id: 6, name: 'Andrew', email: 'jasonb@gmail.com', avatar: "friendAvatar6"},
        {id: 7, name: 'Amy Watson', email: 'jasonb@gmail.com', avatar: "friendAvatar7"},
    ];

    const contactElement = contactsData.map(contact => <Contact name={contact.name} email={contact.email}
                                                                avatar={contact.avatar}/>)

    return (
        <div className={styles.contacts}>
            <div className={styles.title}>
                Friends
            </div>
            <div>
                <input className={styles.search} type="search" placeholder="  Search Contacts..."></input>
            </div>
            <div className={styles.contactElement}>
                {contactElement}
            </div>
        </div>
    )
}

export default Contacts;