import React from "react";
import styles from "./Messages.module.css"
import Contact from "../../Contacts/Contact/Contact";
import Message from "./Message/Message";
import {ContactsDataType, MessagesDataType} from "../../../../redux/my_store";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";

const Messages = () => {

    const contactsData = useSelector<RootState, ContactsDataType>(state => state.contactsData)
    const messagesData = useSelector<RootState, MessagesDataType>(state => state.messagesData)

    const contactElement = contactsData.map(contact => <Contact name={contact.name} email={contact.email}
                                                                      avatar={contact.avatar} id={contact.id}/>)

    const messageElement = messagesData.map(message => <Message key={message.id} messages={message.messages}
                                                                      id={message.id}/>)

    return (
        <div className={styles.messages}>
            <div className={styles.title}>All Messages</div>
            <div className={styles.content}>
                <div>
                    <div className={styles.contactElement}>
                        {contactElement}
                    </div>
                </div>
                <div>
                    {messageElement}
                    <input/>
                    <button>
                        <FontAwesomeIcon icon={faPaperPlane} size="lg"/></button>
                </div>
            </div>
        </div>
    )
}

export default Messages;