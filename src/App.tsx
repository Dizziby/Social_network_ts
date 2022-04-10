import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Section/Nav/Nav";
import Main from "./components/Section/Main/Main";
import Contacts from "./components/Section/Contacts/Contacts";
import Logout from "./components/Section/Main/Logout/Logout";
import {ContactsDataType, deletePost, MessagesDataType, PostDataType} from "./redux/state";

type SectionCSSType = "sectionAll" | "sectionMessages" | "sectionLogout"

export type SectionType = "all" | "messages" | "logout"

type AppPropsType = {
    contactsData: ContactsDataType
    postData: PostDataType
    messagesData: MessagesDataType
    addPost: (newPostText: string) => void
    updatePostText: (postText: string) => void
    deletePost: (id: string) => void
}

function App(props: AppPropsType) {

    let section: SectionCSSType = "sectionAll";

    const [sectionView, setSectionView] = useState<SectionType>("all")

    const [sect, setSect] = useState("sectionAll")

    const changeGrid = (value: SectionType) => {
        setSectionView(value)
    }

    if (sectionView === "all") {
        section = "sectionAll"
    } else if (sectionView === "messages") {
        section = "sectionMessages"
    } else if ((sectionView === "logout")) {
        section = "sectionLogout"
    }

    return (
        <div className="App">
            <Header section={section}/>
            <div className={section}>
                <Nav section={section} changeGrid={changeGrid}/>
                <Main section={section} postData={props.postData} contactsData={props.contactsData}
                      messagesData={props.messagesData} addPost={props.addPost} updatePostText={props.updatePostText}
                      deletePost={props.deletePost} changeGrid={changeGrid}/>
                {section === "sectionAll" && <Contacts contactsData={props.contactsData}/>}
            </div>
            <Footer section={section}/>
            {section === "sectionLogout" && <Logout changeGrid={changeGrid}/>}
        </div>
    );
}

export default App;
