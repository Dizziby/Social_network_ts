import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Nav} from "./components/Section/Nav/Nav";
import {Main} from "./components/Section/Main/Main";
import {Contacts} from "./components/Section/Contacts/Contacts";
import {Logout} from "./components/Section/Main/Logout/Logout";
import {getAuthUserDataTC} from "./redux/reducers/authReducer";
import {useAppDispatch} from "./redux/hooks";

export type SectionCSSType = "sectionAll" | "sectionMessages" | "sectionLogout" | "sectionError"

function App() {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, [])


    const useLocalStateSection = (key: string, defaultValue: SectionCSSType) => {
        const [section, setSection] = useState(()=> JSON.parse(localStorage.getItem(key) || `"${defaultValue}"`))
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(section));
        }, [section]);
        return [section, setSection]
    }

    const [section, setSection] = useLocalStateSection("section", "sectionAll")

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