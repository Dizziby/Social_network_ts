import {PostsActionType} from "./reducers/profileReducer";
import {AuthActionType} from "./reducers/authReducer";
import {GroupActionType} from "./reducers/groupsReducer";
import {MessagesActionType} from "./reducers/messagesReducer";
import {FriendsActionType} from "./reducers/friendsReducer";

export type ActionTypeForApp =
    FriendsActionType
    | PostsActionType
    | AuthActionType
    | GroupActionType
    | MessagesActionType

// PROFILE

export const ADD_POST = "ADD_POST"
export const UPDATE_POST_TEXT = "UPDATE_POST_TEXT"
export const DELETE_POST = "DELETE_POST"
export const SET_PROFILE = "SET_PROFILE"
export const CLICK_LIKE = "CLICK_LIKE"
export const SET_STATUS = "SET_STATUS"

// MESSAGE
export const ADD_MESSAGE = "ADD_MESSAGE"

// FRIENDS
export const CHANGE_FRIEND_STATUS = "CHANGE_FRIEND_STATUS"
export const FOLLOWING_USER = "FOLLOWING_USER"
export const UNFOLLOWING_USER = "UNFOLLOWING_USER"
export const SET_USERS = "SET_USERS"
export const SHOW_MORE_FOUND_USERS = "SHOW_MORE_FOUND_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_FOUND_FRIENDS = "SET_TOTAL_FOUND_FRIENDS"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"

// GROUP
export const LEAVE_GROUP = "LEAVE_GROUP"

// AUTH
export const SET_USER_DATA = "SET_USER_DATA"
export const STOP_SUBMIT = "STOP_SUBMIT"

