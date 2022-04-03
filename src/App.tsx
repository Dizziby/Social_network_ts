import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Section/Nav/Nav";
import Main from "./components/Section/Main/Main";
import Contacts from "./components/Section/Contacts/Contacts";
import Logout from "./components/Section/Main/Logout/Logout";

type SectionType = "sectionAll" | "sectionMessages"

type SectionMessagesType = {
    section: string
}

function App() {

    let section: SectionType = "sectionAll";

    const [sectionMessages, setSectionMessages] = useState(false)

    const changeGridSection = (value: boolean) => {
        setSectionMessages(value)
    }

    if (sectionMessages) {
        section = "sectionMessages"
    } else {
        section = "sectionAll"
    }

    return (
        <div className="App">
            <Header/>
            <div className={section}>
                <Nav section={section} changeGridSection={changeGridSection}/>
                <Main section={section}/>
                <ContactsControl section={section}/>
            </div>
            <Footer/>
        </div>
    );
}

function ContactsControl (props: SectionMessagesType) {
    if (props.section === "sectionAll") {
    return <Contacts />
    } else {
    return <></>
    }
}





export default App;
