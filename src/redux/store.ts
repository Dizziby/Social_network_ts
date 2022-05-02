import {combineReducers, createStore} from "redux";
import {postsReducer} from "./reducers/postsReducer";
import {messagesReducer} from "./reducers/messagesReducer";
import {contactsReducer} from "./reducers/contactsReducer";
import {groupsReducer} from "./reducers/groupsReducer";
import {friendsReducer} from "./reducers/friendsReducer";

const rootReducer = combineReducers({
        postsData: postsReducer,
        contactsData: contactsReducer,
        messagesData: messagesReducer,
        groupsData: groupsReducer,
        friendsData: friendsReducer,
    }
)

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>