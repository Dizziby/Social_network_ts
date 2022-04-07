import React from "react";
import styles from "./Messages.module.css"
import Contact from "../../Contacts/Contact/Contact";
import Message from "./Message/Message";

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
                                                            avatar={contact.avatar} id={contact.id}/>)

const messagesData = [
    {
        id: 1,
        messages: ["Hello", "How are you?", "Bye",]
    },
    {
        id: 2,
        messages: ["Hello2", "2How are you?", "Bye2",]
    },
]

const messageElement = messagesData.map(message => <Message messages={message.messages} id={message.id}/>)


const Messages = () => {
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
                </div>
            </div>
        </div>
    )
}

export default Messages;