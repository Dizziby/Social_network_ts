import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Section/Nav/Nav";
import Main from "./components/Section/Main/Main";
import Contacts from "./components/Section/Contacts/Contacts";
import Logout from "./components/Section/Main/Logout/Logout";

export type SectionCSSType = "sectionAll" | "sectionMessages" | "sectionLogout"

function App() {

    const [section, setSection] = useState<SectionCSSType>("sectionAll")

    useEffect(() => {
        const section = JSON.parse(localStorage.getItem('section') || "{}");
        if (section) {
            setSection(section);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('section', JSON.stringify(section));
    }, [section]);

    const changeGrid = (value: SectionCSSType) => {
        setSection(value)
    }

    return (
        <div className="App">
            <Header section={section}/>
            <div className={section}>
                <Nav section={section} changeGrid={changeGrid}/>
                <Main section={section} changeGrid={changeGrid}/>
                {section === "sectionAll" && <Contacts/>}
            </div>
            <Footer section={section}/>
            {section === "sectionLogout" && <Logout changeGrid={changeGrid}/>}
        </div>
    );
}

export default App;