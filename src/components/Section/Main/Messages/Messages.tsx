import React from "react";
import styles from "./Messages.module.css"

const contactsData = [
    {id: 1, name: 'Bucky Bames', email: 'wintersolder@gmail.com', avatar: "friendAvatar"},
    {id: 2, name: 'Sarah Lorender', email: 'barnes@gmail.com', avatar: "friendAvatar2"},
    {id: 3, name: 'Jason Borne', email: 'jasonb@gmail.com', avatar: "friendAvatar3"},
    {id: 4, name: 'Cameron Diaz', email: 'jasonb@gmail.com', avatar: "friendAvatar4"},
    {id: 5, name: 'Daniel Warber', email: 'jasonb@gmail.com', avatar: "friendAvatar5"},
    {id: 6, name: 'Andrew', email: 'jasonb@gmail.com', avatar: "friendAvatar6"},
    {id: 7, name: 'Amy Watson', email: 'jasonb@gmail.com', avatar: "friendAvatar7"},
];


const Messages = () => {
    return (
        <div className={styles.messages}>
            <div>All Messages</div>
            <div>Contact</div>
            <div>Message</div>
        </div>
    )
}

export default Messages;