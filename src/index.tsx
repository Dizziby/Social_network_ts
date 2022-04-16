import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {StateType} from "./redux/my_store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/store";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
