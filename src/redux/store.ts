import {combineReducers, createStore} from "redux";
import postsReducer from "./reducers/postsReducer";
import messagesReducer from "./reducers/messagesReducer";
import contactsReducer from "./reducers/contactsReducer";
import groupsReducer from "./reducers/groupsReducer";
import friendsReducer from "./reducers/friendsReducer";

export type ActionType = {
        type: "ADD_POST" | "UPDATE_POST_TEXT" | "DELETE_POST" | "ADD_MESSAGE" | "UPDATE_MESSAGE_TEXT"
        newPostText?: string
        postText?: string
        id?: string
        messageText?: string
        newMessageText?: string
}

const rootReducer = combineReducers({
        postsData: postsReducer,
        contactsData: contactsReducer,
        messagesData: messagesReducer,
        groupsData: groupsReducer,
        friendsData: friendsReducer,
    }
)

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>

export default store;