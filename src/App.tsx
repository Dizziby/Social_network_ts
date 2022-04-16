import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Section/Nav/Nav";
import Main from "./components/Section/Main/Main";
import Contacts from "./components/Section/Contacts/Contacts";
import Logout from "./components/Section/Main/Logout/Logout";
import {ActionType, StateType} from "./redux/my_store";

export type SectionCSSType = "sectionAll" | "sectionMessages" | "sectionLogout"

type AppPropsType = {
    dispatch: (action: ActionType) => void
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
                <Main section={section} dispatch={props.dispatch} changeGrid={changeGrid}/>
                {section === "sectionAll" && <Contacts/>}
            </div>
            <Footer section={section}/>
            {section === "sectionLogout" && <Logout changeGrid={changeGrid}/>}
        </div>
    );
}

export default App;
