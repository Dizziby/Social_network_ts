import {combineReducers, createStore} from "redux";
import {postsReducer} from "./reducers/postsReducer";
import {messagesReducer} from "./reducers/messagesReducer";
import {groupsReducer} from "./reducers/groupsReducer";
import {friendsReducer} from "./reducers/friendsReducer";

const rootReducer = combineReducers({
        postsData: postsReducer,
        messagesData: messagesReducer,
        groupsData: groupsReducer,
        friendsData: friendsReducer,
    }
)

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch