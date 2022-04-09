import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, deletePost, StateType, subscriber, updatePostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App contactsData={state.contactsData} postData={state.postData} messagesData={state.messagesData}
                     addPost={addPost} updatePostText={updatePostText} deletePost={deletePost}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscriber(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
