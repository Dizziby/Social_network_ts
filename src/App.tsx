import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Section/Nav/Nav";
import Main from "./components/Section/Main/Main";
import Contacts from "./components/Section/Contacts/Contacts";
import Logout from "./components/Section/Main/Logout/Logout";

type SectionCSSType = "sectionAll" | "sectionMessages" | "sectionLogout"

export type SectionType = "all" | "messages" | "logout"

function App() {

    let section: SectionCSSType = "sectionAll";

    const [sectionView, setSectionView] = useState<SectionType>("all")

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
                <Main section={section}/>
                {section === "sectionAll" && <Contacts/>}
            </div>
            <Footer section={section}/>
            {section === "sectionLogout" && <Logout/>}
        </div>
    );
}

export default App;
