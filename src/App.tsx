import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Section/Nav/Nav";
import Main from "./components/Section/Main/Main";
import Contacts from "./components/Section/Contacts/Contacts";
import Logout from "./components/Section/Main/Logout/Logout";
import {StateType} from "./redux/state";

export type SectionCSSType = "sectionAll" | "sectionMessages" | "sectionLogout"

type AppPropsType = {
    state: StateType
    addPost: (newPostText: string) => void
    updatePostText: (postText: string) => void
    deletePost: (id: string) => void
}

function App(props: AppPropsType) {

    const [section, setSection] = useState <SectionCSSType>("sectionAll")

    const changeGrid = (value: SectionCSSType) => {
        setSection(value)
    }

    return (
        <div className="App">
            <Header section={section}/>
            <div className={section}>
                <Nav section={section} changeGrid={changeGrid}/>
                <Main section={section} postData={props.state.postData} contactsData={props.state.contactsData}
                      messagesData={props.state.messagesData} addPost={props.addPost} updatePostText={props.updatePostText}
                      deletePost={props.deletePost} changeGrid={changeGrid}/>
                {section === "sectionAll" && <Contacts contactsData={props.state.contactsData}/>}
            </div>
            <Footer section={section}/>
            {section === "sectionLogout" && <Logout changeGrid={changeGrid}/>}
        </div>
    );
}

export default App;
