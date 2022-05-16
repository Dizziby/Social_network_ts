import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {messagesReducer} from "./reducers/messagesReducer";
import {groupsReducer} from "./reducers/groupsReducer";
import {friendsReducer} from "./reducers/friendsReducer";
import {authReducer} from "./reducers/authReducer";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
        profileData: profileReducer,
        messagesData: messagesReducer,
        groupsData: groupsReducer,
        friendsData: friendsReducer,
        auth: authReducer
    }
)

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store;

