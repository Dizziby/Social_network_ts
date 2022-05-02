import React, {ChangeEvent, useState} from "react";
import {Contact} from "./Contact/Contact";
import styles from "./Contacts.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {ContactsDataType} from "../../../redux/reducers/contactsReducer";

export const Contacts = () => {

    const contactsData = useSelector<RootState, ContactsDataType>(state => state.contactsData)

    let regExp = new RegExp("", "gi")
    const [filter, setFilter] = useState(regExp)
    const onChangeHandlerFilter = (e: ChangeEvent<HTMLInputElement>): void => {
        let regExp = new RegExp(`${e.currentTarget.value}`, "gi")
        setFilter(regExp)
    }

    const contactElementFilterSearch = contactsData.filter(el => filter.test(el.name))

    const contactElement = contactElementFilterSearch.map(contact => <Contact key={contact.id} name={contact.name}
                                                                email={contact.email}
                                                                avatar={contact.avatar} id={contact.id}/>)

    return (
        <div className={styles.contacts}>
            <div className={styles.title}>
                Friends
            </div>
            <div>
                <input className={styles.search} type="search" placeholder="  Search Contacts..." onChange={onChangeHandlerFilter}/>
            </div>
            <div className={styles.contactElement}>
                {contactElement}
            </div>
        </div>
    )
}