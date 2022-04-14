import React from "react";
import styles from "./Messages.module.css"
import Contact from "../../Contacts/Contact/Contact";
import Message from "./Message/Message";
import {ContactsDataType, MessagesDataType} from "../../../../redux/state";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


type MessagesPropsType = {
    contactsData: ContactsDataType
    messagesData: MessagesDataType
}

const Messages: React.FC<MessagesPropsType> = (props) => {

    const contactElement = props.contactsData.map(contact => <Contact name={contact.name} email={contact.email}
                                                                      avatar={contact.avatar} id={contact.id}/>)

    const messageElement = props.messagesData.map(message => <Message key={message.id} messages={message.messages}
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