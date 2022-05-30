import {SET_USER_DATA, STOP_SUBMIT} from "../types";
import {authAPI} from "../../api/api";
import {ThunkActionType, ThunkDispatchType} from "../hooks";

export type AuthType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    isStopSubmit: boolean
    messageStopSubmit: string
}

export type AuthActionType = ReturnType<typeof setAuthUserDataAC> | ReturnType<typeof stopSubmitAC>

const initialState: AuthType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isStopSubmit: false,
    messageStopSubmit: ""
}

export const authReducer = (state = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            }
        }
        case STOP_SUBMIT: {
            return {
                ...state,
                isStopSubmit: action.payload.isStopSubmit,
                messageStopSubmit: action.payload.messageStopSubmit
            }
        }
        default:
            return state
    }
}


// ActionCreator

export const setAuthUserDataAC = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {
        id,
        email,
        login,
        isAuth
    }
}) as const


export const stopSubmitAC = (isStopSubmit: boolean, messageStopSubmit: string) => ({
    type: STOP_SUBMIT,
    payload: {
        isStopSubmit,
        messageStopSubmit
    }
}) as const


//Thunk Creator

export const getAuthUserDataTC = (): ThunkActionType => (dispatch: ThunkDispatchType) => {
    authAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserDataAC(id, email, login, true))
        }
    })
}

export const loginTC = (email: string, password:string, rememberMe: boolean): ThunkActionType => (dispatch: ThunkDispatchType) => {
    authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserDataTC())
            dispatch(stopSubmitAC(false, ""))
        } else {
            dispatch(stopSubmitAC(true, response.data.messages[0]))
        }
    })
}

export const logoutTC = (): ThunkActionType => (dispatch: ThunkDispatchType) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserDataAC(null, null, null, false))
        }
    })
}