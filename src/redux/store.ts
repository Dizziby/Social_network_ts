import {createStore, combineReducers} from "redux";
import postsReducer from "./postsReducer";
import messagesReducer from "./messagesReducer";
import contactsReducer from "./contactsReducer";

const rootReducer = combineReducers({
        postsData: postsReducer,
        contactsData: contactsReducer,
        messagesData: messagesReducer
    }
)

const store = createStore(rootReducer);

// export type rootReducer = ReturnType<typeof store.getState>;

export default store;